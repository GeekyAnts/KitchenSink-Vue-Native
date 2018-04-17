module.exports = {
  getTransformModulePath() {
    return require.resolve("./vueTransformerPlugin.js");
  },
  getSourceExts() {
    return ["vue"];
  }
};
