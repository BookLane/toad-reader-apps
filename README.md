# Installation

1. `npm i` (using Node 14)
2. Add tenants > toadreader from the zip file
3. In `toadreader/app.js`, update the `DEV_DATA_ORIGIN_OVERRIDE` value with server's IP address
4. `npm run change-tenant toadreader`
5. Check app.sample.json and fill in the missing values in app.json based on it.

# Development

`npm start`

# Updating Staging, Beta, and Production

See `package.json` scripts.

# Demo

[toadreader.com/demo](https://toadreader.com/demo/)

# License

[AGPL-3.0](https://opensource.org/licenses/AGPL-3.0) ([summary](https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)))
