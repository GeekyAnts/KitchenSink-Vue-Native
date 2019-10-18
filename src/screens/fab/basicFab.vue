<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Single FAB</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <view :style="{ flex: 1 }">
      <nb-fab
        :active="isFabIconActive"
        :onPress="handleFabIconPress"
        direction="up"
        position="bottomRight"
      >
        <nb-icon-nb name="md-share"></nb-icon-nb>
        <nb-button :style="{ backgroundColor: '#34A34F' }">
          <nb-icon-nb name="logo-whatsapp"></nb-icon-nb>
        </nb-button>
        <nb-button :style="{ backgroundColor: '#3B5998' }">
          <nb-icon-nb name="logo-facebook"></nb-icon-nb>
        </nb-button>
        <nb-button :style="{ backgroundColor: '#DD5144' }">
          <nb-icon-nb name="ios-mail"></nb-icon-nb>
        </nb-button>
      </nb-fab>
    </view>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      isFabIconActive: false,
      stylesObj: {
        fabContainer: {
          position: "bottomRight"
        }
      }
    };
  },
  methods: {
    handleFabIconPress() {
      this.isFabIconActive = !this.isFabIconActive;
    }
  }
};
</script>
