git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

rm -rf src/production 
mv src/build src/production 
git add src/production
git add docs/_sass/sprite.scss
git commit -m "Deploy Production from $(git log -1 --format=%h) [ci skip]"
git push origin develop

echo "Built Production successfully"
