<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Multiple FAB</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <view :style="{ flex: 1 }">
      <nb-fab
        :active="isFabIconActive1"
        :onPress="handleFabIconPress1"
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

      <nb-fab
        :active="isFabIconActive2"
        :onPress="handleFabIconPress2"
        direction="up"
        position="bottomLeft"
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

      <nb-fab
        :active="isFabIconActive3"
        :onPress="handleFabIconPress3"
        direction="left"
        position="topRight"
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

      <nb-fab
        :active="isFabIconActive4"
        :onPress="handleFabIconPress4"
        direction="right"
        position="topLeft"
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
      isFabIconActive1: false,
      isFabIconActive2: false,
      isFabIconActive3: false,
      isFabIconActive4: false,
      stylesObj: {
        fabContainer: {
          position: "bottomRight"
        }
      }
    };
  },
  methods: {
    handleFabIconPress1() {
      this.isFabIconActive1 = !this.isFabIconActive1;
    },
    handleFabIconPress2() {
      this.isFabIconActive2 = !this.isFabIconActive2;
    },
    handleFabIconPress3() {
      this.isFabIconActive3 = !this.isFabIconActive3;
    },
    handleFabIconPress4() {
      this.isFabIconActive4 = !this.isFabIconActive4;
    }
  }
};
</script>
