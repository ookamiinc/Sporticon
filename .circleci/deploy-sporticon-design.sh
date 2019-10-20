git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout master

rm -rf src/export
mv src/build src/export

git add src/export
git add website/_sass/sprite.scss
git commit -m "Sporticon build from $(git log -1 --format=%h) [ci skip]"
git push origin master

echo "Built Sporticon successfully"
