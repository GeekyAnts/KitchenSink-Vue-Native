// For React Native version 0.59 or later
var upstreamTransformer = require("metro-react-native-babel-transformer");

var vueNativeScripts = require("vue-native-scripts");
var vueExtensions = ["vue"]; // <-- Add other extensions if needed.
var rnSVGTransformer = require('react-native-svg-transformer');

module.exports.transform = function({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
    return vueNativeScripts.transform({ src, filename, options });
  }
  return rnSVGTransformer.transform( src, filename, options );
};
