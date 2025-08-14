const { getSentryExpoConfig } = require('@sentry/react-native/metro');

const sentryConfig = getSentryExpoConfig(__dirname);

// Create new config object with our modifications
const config = {
  ...sentryConfig,
  // Add UI Kitten transpilation support for web builds
  transformer: {
    ...sentryConfig.transformer,
    unstable_allowRequireContext: true,
  },
  // Disable package exports resolution for Expo 51 compatibility
  resolver: {
    ...sentryConfig.resolver,
    unstable_enablePackageExports: false,
    sourceExts: [...(sentryConfig.resolver?.sourceExts || ['js', 'jsx', 'json', 'ts', 'tsx']), 'cjs'],
  },
};

module.exports = config
