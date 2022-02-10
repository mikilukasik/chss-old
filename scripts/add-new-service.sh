#!/bin/sh

if [ $# -lt 3 ]; then
    echo "Usage: npm run add:new-service [servicename] [gitrepo] [subrepos, comma separated]"
fi

if [ $# -lt 2 ]; then
    exit 1
fi

echo "Creating service: $1";
echo "Using git repo: $2";
echo "Adding submodule dependancies: $3";
echo

set -x

git submodule add $2       

unzip chss-service-blank.zip

cp -R chss-service-blank/. chss-service-$1/

cd chss-service-$1

# git init
# git remote add origin $2

npm init -y

for i in ${3//,/ }
do
    git submodule add git@github.com:mikilukasik/$i.git
done


SUBMODULES_USED=$3 node editPackages.mjs

npm i

cd ..

./move-submodule.sh

rm -rf ./chss-service-blank
