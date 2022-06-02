const fs = require('fs');
const loader = require('@assemblyscript/loader');
const imports = {
  /* imports go here */
};

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + '/build/optimized.wasm'), imports);
const { __newArray, __getInt8Array, Int8Array_ID, getMovedBoard: getMovedBoardWasm } = wasmModule.exports;

const getMovedBoard = (move, board) => __getInt8Array(getMovedBoardWasm(move, __newArray(Int8Array_ID, board)));

module.exports = { ...wasmModule.exports, getMovedBoard };
