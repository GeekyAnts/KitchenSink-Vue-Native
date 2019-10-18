<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Toast with duration</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-button :onPress="handleBtnPress">
        <nb-text>Toast</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { Toast } from "native-base";

export default {
  methods: {
    handleBtnPress() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        duration: 3000
      });
    }
  }
};
</script>
