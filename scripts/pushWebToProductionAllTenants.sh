#!/bin/bash

npm run change-tenant -- toadreader
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- biblemesh
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- zondervan
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- g12
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

# npm run change-tenant -- proyectonehemias
# npm run go-push-web-to-staging
# node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- homeschool
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

# npm run change-tenant -- readyman
# npm run go-push-web-to-staging
# node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- biblearc
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- bridge
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- langham
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- blf
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js

npm run change-tenant -- kmk
npm run go-push-web-to-staging
node ./scripts/pushwebstagingtoproduction.js