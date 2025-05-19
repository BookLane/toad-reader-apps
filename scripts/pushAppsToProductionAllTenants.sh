#!/bin/bash

npm run change-tenant -- biblemesh
npm run go-push-apps-to-production

npm run change-tenant -- zondervan
npm run go-push-apps-to-production

npm run change-tenant -- langham
npm run go-push-apps-to-production