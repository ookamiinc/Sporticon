git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git add -fA
git commit --allow-empty -m "Build Production from $(git log -1 --pretty=%B)"
git push origin

echo "Built production successfully"