set -e
yarn build
cd build
git init
git co -b gh-pages
git add -A
git commit -m 'docs: update docs to gh-pages'
git push -f git@github.com:ziven27/sacss.git gh-pages
cd -
