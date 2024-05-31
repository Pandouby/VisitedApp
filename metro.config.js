const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
        sourceExts: ['scss', 'sass', 'jsx', 'js', 'ts', 'tsx', 'json'],
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
