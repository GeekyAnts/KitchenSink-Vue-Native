<template>
  <nb-container>
    <status-bar :barStyle="'light-content'"></status-bar>
    <image-background :source="launchScreenBg" class="imageContainer">
      <view class="logoContainer" :style="stylesObj.logoContainerStyle">
        <image-background
          :source="launchscreenLogo"
          class="logo"
          :style="stylesObj.logoStyle"
        />
      </view>
      <view class="text-container">
        <nb-h3 :style="{ marginBottom: 8 }" class="text-color-white"
          >App To ShowCase</nb-h3
        >
        <nb-h3 class="text-color-white">NativeBase Components</nb-h3>
      </view>
      <view :style="{ marginBottom: 80 }">
        <nb-button
          :style="stylesObj.btnContainer"
          :onPress="handleLetGoBtnPress"
        >
          <nb-text> Lets Go!</nb-text>
        </nb-button>
      </view>
    </image-background>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenBg from "../../../assets/launchscreen-bg.png";
import launchscreenLogo from "../../../assets/logo-kitchen-sink.png";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      launchScreenBg,
      launchscreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          backgroundColor: "#6faf98",
          alignSelf: "center"
        }
      }
    };
  },
  methods: {
    handleLetGoBtnPress() {
      this.navigation.openDrawer();
    }
  }
};
</script>

<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: blue;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 50;
  background-color: transparent;
}
.text-color-white {
  color: white;
}
.button-container {
  background-color: #6faf98;
  align-self: center;
}
</style>
