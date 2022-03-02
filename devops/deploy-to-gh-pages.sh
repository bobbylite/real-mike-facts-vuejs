#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

## if you want to add a branch content to your local branch 
# cp ../devops/content/<GIT-CONTENT>.* ./
cp ../devops/content/README.md ./

#git init
#git add -A
#git commit -m 'deploy'
#git remote add origin https://github.com/bobbylite/realmikefacts
#git push --set-upstream origin develop

git add --all
git commit -m 'production deployment'
git push


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

echo '\nSuccessful deployment to https://bobbylite.github.io/realmikefacts\n'

cd -