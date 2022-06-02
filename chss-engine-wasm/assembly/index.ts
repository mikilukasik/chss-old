// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export const Int8Array_ID = idof<Int8Array>();

export function getMovedBoard(move: i32, board: Int8Array): Int8Array {
  const sourceIndex = i8(move >>> 10);
  const targetIndex = i8(move & 63);
  const copiedBoard = board.slice(0); //new Int8Array(board);

  copiedBoard[targetIndex] = copiedBoard[sourceIndex];
  copiedBoard[sourceIndex] = 0;

  copiedBoard[64] = board[64] ^ 1; // switch next

  switch (
    board[sourceIndex] & 7 // piece
  ) {
    case 1:
      // pawn
      if (board[66] === targetIndex) copiedBoard[board[64] ? targetIndex + 8 : targetIndex - 8] = 0; // clear en passant hit
      copiedBoard[66] = 0; // clear en passant target;

      if (targetIndex - sourceIndex === 16) copiedBoard[66] = targetIndex - 8; // black pawn double move, set en passant target
      if (sourceIndex - targetIndex === 16) copiedBoard[66] = targetIndex + 8; // white pawn double move, set en passant target

      // pawn can become queen
      if (targetIndex >>> 3 === 0) copiedBoard[targetIndex] = i8(move >>> 6) & 15;
      if (targetIndex >>> 3 === 7) copiedBoard[targetIndex] = i8(move >>> 6) & 15;
      break;

    case 4:
      // rook
      copiedBoard[66] = 0; // clear en passant target;
      if (board[65] === 0) break; // no possible castling

      if (sourceIndex === 63) copiedBoard[65] = board[65] & 7; // clear white king side castling
      if (sourceIndex === 56) copiedBoard[65] = board[65] & 11; // clear white queen side castling
      if (sourceIndex === 7) copiedBoard[65] = board[65] & 13; // clear black king side castling
      if (sourceIndex === 0) copiedBoard[65] = board[65] & 14; // clear black queen side castling
      break;
    case 6:
      // king
      copiedBoard[66] = 0; // clear en passant target;

      if (board[65] === 0) break; // no possible castling

      if (sourceIndex === 4) {
        copiedBoard[65] = board[65] & 12; // clear black castling

        if (targetIndex === 2) {
          // black castling queen side
          copiedBoard[3] = 4;
          copiedBoard[0] = 0;
          break;
        }

        if (targetIndex === 6) {
          // black castling king side
          copiedBoard[5] = 4;
          copiedBoard[7] = 0;
          break;
        }
      }

      if (sourceIndex === 60) {
        copiedBoard[65] = board[65] & 3; // clear white castling

        if (targetIndex === 58) {
          // white castling queen side
          copiedBoard[59] = 12;
          copiedBoard[56] = 0;
          break;
        }

        if (targetIndex === 62) {
          // black castling king side
          copiedBoard[61] = 12;
          copiedBoard[63] = 0;
          break;
        }
      }

      break; // this break is non-reachable, but linter can't play chess
    default:
      copiedBoard[66] = 0; // clear en passant target;
  }

  if (board[targetIndex] === 4) {
    // black rook gets hit, make sure to remove castling
    if (copiedBoard[0] !== 4) copiedBoard[65] = copiedBoard[65] & 14;
    if (copiedBoard[7] !== 4) copiedBoard[65] = copiedBoard[65] & 13;
  }

  if (board[targetIndex] === 12) {
    // white rook gets hit, make sure to remove castling
    if (copiedBoard[56] !== 12) copiedBoard[65] = copiedBoard[65] & 11;
    if (copiedBoard[63] !== 12) copiedBoard[65] = copiedBoard[65] & 7;
  }

  return copiedBoard;
}
