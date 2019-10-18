<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Toast Position</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-button :style="stylesObj.mb20" :onPress="handleBtnPress1">
        <nb-text>Top Toast</nb-text>
      </nb-button>
      <nb-button :style="stylesObj.mb20" :onPress="handleBtnPress2">
        <nb-text>Bottom Toast</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { Toast } from "native-base";

export default {
  data() {
    return {
      stylesObj: {
        mb20: {
          marginBottom: 20
        }
      }
    };
  },
  methods: {
    handleBtnPress1() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        position: "top"
      });
    },
    handleBtnPress2() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        position: "bottom"
      });
    }
  }
};
</script>
