#!/bin/bash
cd ~/apps/hm2
git pull
yarn install --ignore-engines --frozen-lockfile --production
cd ~/apps/hm2/apps/backend
rm .env 2> /dev/null
touch .env
echo "NODE_ENV=production"
echo "PORT=8000" >> .env
echo "DATABASE_DIALECT=sqlite" >> .env
echo "DATABASE_STORAGE=/home/pi/apps/hm2/apps/backend/database.sqlite" >> .env
echo "REDIS_HOST=127.0.0.1" >> .env
echo "REDIS_PORT=6379" >> .env
echo "SECRET=lkasd823js" >> .env
echo "MASTER_PASSWORD=Ah7ai09b" >> .env
echo "TOKEN_EXPIRES_DAYS=60" >> .env
echo "UPLOADS_PATH=/home/pi/apps/hm2/apps/backend/public" >> .env
echo "DOWNLOADS_PATH=/home/pi/apps/hm2/apps/backend/public" >> .env
/usr/bin/pm2 restart src/index.js --name "hm2-backend" --update-env --interpreter=/usr/bin/node
