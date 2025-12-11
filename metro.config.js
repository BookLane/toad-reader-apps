// Use Expo's metro config as base
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add UI Kitten transpilation support for web builds
config.transformer.unstable_allowRequireContext = true;

// Disable package exports resolution for Expo 51 compatibility
config.resolver.unstable_enablePackageExports = false;
config.resolver.sourceExts.push('cjs');

module.exports = config;
