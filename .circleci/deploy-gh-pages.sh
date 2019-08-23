git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout gh-pages
git pull origin gh-pages

find . -maxdepth 1 ! -name 'docs' ! -name 'CNAME' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv docs/_site/* .
rm -R docs

git add -fA
git commit --allow-empty -m "Deploy Site from $(git log master -1 --pretty=%B)"
git push origin gh-pages

echo "Deployed Site successfully"