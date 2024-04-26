#!/bin/sh

set -e

# build the web app
cd packages/web
yarn build

cd ../..
docker compose up -d