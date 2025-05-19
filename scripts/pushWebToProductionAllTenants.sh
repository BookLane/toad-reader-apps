#!/bin/bash

npm run change-tenant -- biblemesh
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- zondervan
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- langham
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js