# staringfolder="${PWD}"
sharedproject="${PWD}/msg"
# superproject="${PWD}/chss-app-game-client"
# submodule="msg"
# cd "$superproject"
# (cd -- "$submodule" && git status) # Verify that no uncommited changes exist!
# (cd -- "$submodule" && git push -- "$sharedproject") # Save any local-only commits
# git submodule deinit -f -- "$submodule" # Get rid of submodule's check-out
# rm -rf .git/modules/"$submodule" # as well as of its local repository
# mkdir -p .submods
# git mv -- "$submodule" .submods/
# echo "gitdir: $sharedproject.git" > ".submods/$submodule/.git"
# ln -s -- "$sharedproject" "$submodule"
# echo "/$submodule" >> .gitignore
# cd "$staringfolder"

project="${PWD}/chss-app-game-client"
rm -rf "${project}/msg"
ln -s -- "$sharedproject" "$project"

project="${PWD}/chss-service-auth"
rm -rf "${project}/msg"
ln -s -- "$sharedproject" "$project"


project="${PWD}/chss-service-game-handler"
rm -rf "${project}/msg"
ln -s -- "$sharedproject" "$project"


project="${PWD}/chss-service-gateway"
rm -rf "${project}/msg"
ln -s -- "$sharedproject" "$project"


project="${PWD}/chss-service-logger"
rm -rf "${project}/msg"
ln -s -- "$sharedproject" "$project"

