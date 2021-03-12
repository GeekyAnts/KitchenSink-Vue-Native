/**
 * Metro configuration for Vue Native
 * Borrowed and modified from React Native
 *
 * @format
 */

const { getDefaultConfig } = require('@expo/metro-config');

const fs = require('fs');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("./vueTransformerPlugin.js"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      })
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, "vue", "svg"]
    }
  };
})();