<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Toast Type</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-button :style="stylesObj.mb15" :onPress="handleBtnPress1">
        <nb-text>Default Toast</nb-text>
      </nb-button>
      <nb-button :style="stylesObj.mb15" :onPress="handleBtnPress2">
        <nb-text>Success Toast</nb-text>
      </nb-button>
      <nb-button :style="stylesObj.mb15" :onPress="handleBtnPress3">
        <nb-text>Warning Toast</nb-text>
      </nb-button>
      <nb-button :style="stylesObj.mb15" :onPress="handleBtnPress4">
        <nb-text>Danger Toast</nb-text>
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
        mb15: {
          marginBottom: 15
        }
      }
    };
  },
  methods: {
    handleBtnPress1() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay"
      });
    },
    handleBtnPress2() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "success"
      });
    },
    handleBtnPress3() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "warning"
      });
    },
    handleBtnPress4() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "danger"
      });
    }
  }
};
</script>
