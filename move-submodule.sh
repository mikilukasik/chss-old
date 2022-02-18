sharedproject="${PWD}/msg"

  project="${PWD}/chss-service-learner"
  rm -rf "${project}/msg"
  ln -s -- "$sharedproject" "$project"

  project="${PWD}/chss-service-model-store"
  rm -rf "${project}/msg"
  ln -s -- "$sharedproject" "$project"

  project="${PWD}/chss-service-task-manager"
  rm -rf "${project}/msg"
  ln -s -- "$sharedproject" "$project"

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

sharedproject="${PWD}/chss-module-engine"

  project="${PWD}/chss-service-learner"
  rm -rf "${project}/chss-module-engine"
  ln -s -- "$sharedproject" "$project"

  project="${PWD}/chss-app-game-client"
  rm -rf "${project}/chss-module-engine"
  ln -s -- "$sharedproject" "$project"

  project="${PWD}/chss-service-game-handler"
  rm -rf "${project}/chss-module-engine"
  ln -s -- "$sharedproject" "$project"

sharedproject="${PWD}/chss-module-logger"

  project="${PWD}/chss-app-game-client"
  rm -rf "${project}/chss-module-logger"
  ln -s -- "$sharedproject" "$project"
