git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout master

rm -rf src/production 
mv src/build src/production 

git add src/production
git add docs/_sass/sprite.scss
git commit -m "Sporticon build from $(git log -1 --format=%h) [ci skip]"
git push origin master

echo "Built Sporticon successfully"