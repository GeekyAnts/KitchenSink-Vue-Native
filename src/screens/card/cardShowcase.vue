<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Card Showcase</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card>
        <nb-card-item bordered>
          <nb-left>
            <nb-thumbnail :source="logo"></nb-thumbnail>
            <nb-body>
              <nb-text>NativeBase</nb-text>
              <nb-text note>April 20, 2018</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item>

        <nb-card-item>
          <nb-body>
            <image
              :source="cardImage"
              class="card-item-image"
              :style="stylesObj.cardItemImage"
            />
            <nb-text
              >NativeBase is a free and source framework that enable developers
              to build high-quality mobile apps using React Native iOS and
              Android apps with a fusion of ES6. NativeBase builds a layer on
              top of React Native that provides you with basic set of components
              for mobile application development.</nb-text
            >
          </nb-body>
        </nb-card-item>

        <nb-card-item :style="{ paddingVertical: 0 }">
          <nb-left>
            <nb-button transparent>
              <nb-icon name="logo-github"></nb-icon>
              <nb-text>8000 stars</nb-text>
            </nb-button>
          </nb-left>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import cardImage from "../../../assets/drawer-cover.png";

const deviceWidth = Dimensions.get("window").width;
export default {
  data() {
    return {
      logo,
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      }
    };
  }
};
</script>

<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  align-self: center;
  height: 150;
  margin-vertical: 5;
}
</style>
