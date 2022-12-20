#!/bin/bash
echo "Deploying..." && \
cd apps/frontend && \
yarn version --patch --no-git-tag-version --no-commit-hooks && \
cd ../.. && \
yarn build-frontend && \
yarn build-backend
git add . && \
git commit -m "$1" && \
git push && \
echo "Done!"
