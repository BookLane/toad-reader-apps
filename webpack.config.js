// See https://github.com/akveo/react-native-ui-kitten/issues/996#issuecomment-616115469

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
        }
    }, argv);
    return config;
};