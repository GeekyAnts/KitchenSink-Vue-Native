/**
 * Metro configuration for Vue Native
 * Borrowed and modified from React Native
 *
 * @format
 */

const { getDefaultConfig } = require("metro-config");

const fs = require('fs');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
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
      sourceExts: [...sourceExts, "vue"]
    }
  };
})();