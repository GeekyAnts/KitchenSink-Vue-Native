<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Typography</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-h1 :style="stylesObj.mb10">Header One</nb-h1>
      <nb-h2 :style="stylesObj.mb10">Header Two</nb-h2>
      <nb-h3 :style="stylesObj.mb10">Header Three</nb-h3>
      <nb-text>Default</nb-text>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      stylesObj: {
        mb10: {
          marginBottom: 10
        }
      }
    };
  }
};
</script>
