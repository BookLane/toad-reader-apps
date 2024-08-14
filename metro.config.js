// This replaces `const { getDefaultConfig } = require('expo/metro-config');`
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

// This replaces `const config = getDefaultConfig(__dirname);`
const defaultConfig = getSentryExpoConfig(__dirname);

defaultConfig.resolver.assetExts.push("ttf", "mp4")

module.exports = defaultConfig