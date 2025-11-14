#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const TENANTS = [
  'biblearc',
  'biblemesh',
  'blf',
  'bridge',
  'ghp',
  'homeschool',
  'kmk',
  'langham',
  'nehemias',
  'poiema',
  'toadreader',
  'truth78',
  'zondervan',
];

const SDK_VERSION = '54.0.0';

function updateTenantAppJson(tenantName) {
  const appJsonPath = path.join(__dirname, '..', 'tenants', tenantName, 'app.json');

  if (!fs.existsSync(appJsonPath)) {
    console.log(`⚠️  ${tenantName}: app.json not found, skipping...`);
    return;
  }

  try {
    const appJsonContent = fs.readFileSync(appJsonPath, 'utf8');
    const appJson = JSON.parse(appJsonContent);

    // Update version
    const oldVersion = appJson.expo.version;
    appJson.expo.version = SDK_VERSION;

    // Update Android versionCode (increment by 100 for major version bump)
    if (appJson.expo.android && appJson.expo.android.versionCode) {
      const oldVersionCode = appJson.expo.android.versionCode;
      // Convert 52.x.x format to 54.0.0 (e.g., 5204 -> 5400)
      appJson.expo.android.versionCode = 5400;
      console.log(`   Android versionCode: ${oldVersionCode} → ${appJson.expo.android.versionCode}`);
    }

    // Update iOS buildNumber (increment by 1)
    if (appJson.expo.ios && appJson.expo.ios.buildNumber) {
      const oldBuildNumber = appJson.expo.ios.buildNumber;
      appJson.expo.ios.buildNumber = String(parseInt(oldBuildNumber) + 1);
      console.log(`   iOS buildNumber: ${oldBuildNumber} → ${appJson.expo.ios.buildNumber}`);
    }

    // Remove deprecated fields
    if (appJson.expo.privacy) {
      delete appJson.expo.privacy;
      console.log(`   ✓ Removed deprecated 'privacy' field`);
    }

    if (appJson.expo.ios && appJson.expo.ios.loadJSInBackgroundExperimental) {
      delete appJson.expo.ios.loadJSInBackgroundExperimental;
      console.log(`   ✓ Removed deprecated 'loadJSInBackgroundExperimental' field`);
    }

    // Ensure expo-build-properties plugin exists with correct config
    if (!appJson.expo.plugins) {
      appJson.expo.plugins = [];
    }

    // Find existing expo-build-properties plugin
    const buildPropsIndex = appJson.expo.plugins.findIndex(plugin =>
      Array.isArray(plugin) && plugin[0] === 'expo-build-properties'
    );

    const buildPropsConfig = [
      "expo-build-properties",
      {
        "android": {
          "compileSdkVersion": 35,
          "targetSdkVersion": 35,
          "buildToolsVersion": "35.0.0",
          "minSdkVersion": 24
        }
      }
    ];

    if (buildPropsIndex >= 0) {
      // Update existing
      appJson.expo.plugins[buildPropsIndex] = buildPropsConfig;
      console.log(`   ✓ Updated expo-build-properties configuration`);
    } else {
      // Add new
      appJson.expo.plugins.push(buildPropsConfig);
      console.log(`   ✓ Added expo-build-properties configuration`);
    }

    // Write back to file with proper formatting
    fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2) + '\n', 'utf8');

    console.log(`✅ ${tenantName}: Updated from ${oldVersion} to ${SDK_VERSION}`);
  } catch (error) {
    console.error(`❌ ${tenantName}: Error - ${error.message}`);
  }
}

console.log('🚀 Updating all tenants to Expo SDK 54...\n');

TENANTS.forEach(tenant => {
  updateTenantAppJson(tenant);
});

console.log('\n✅ All tenants updated!');
console.log('\n📝 Next steps:');
console.log('1. Review changes: git diff tenants/');
console.log('2. Run: npm run change-tenant toadreader');
console.log('3. Build staging: npm run build-android-staging');
