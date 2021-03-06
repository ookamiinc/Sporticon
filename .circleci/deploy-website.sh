git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout gh-pages
git pull origin gh-pages

find . -maxdepth 1 ! -name 'website' ! -name 'CNAME' ! -name '.git' ! -name '.gitignore' ! -name '.circleci' -exec rm -rf {} \;
mv website/_site/* .
rm -R website

git add -fA
git commit --allow-empty -m "Site build from $(git log master -1 --pretty=%h)"
git push origin gh-pages

echo "Deployed site successfully"
