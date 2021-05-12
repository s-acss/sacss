set -e

yarn build

git add -A
git commit -m 'docs: update docs dev'
git push -f

cd build

git init
git add -A
git commit -m 'docs: update docs master'

git push -f git@github.com:ziven27/sacss.git gh-pages

cd -
