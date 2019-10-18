<template>
  <nb-container :style="{ backgroundColor: '#FBFAFA' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>ActionSheet</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-button :onPress="handleBtnPress">
        <nb-text>Actionsheet</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { ActionSheet } from "native-base";

export default {
  data() {
    return {
      btnOptions: [
        { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
        { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
        { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
        { text: "Delete", icon: "trash", iconColor: "#fa213b" },
        { text: "Cancel", icon: "close", iconColor: "#25de5b" }
      ],
      optionCancelIndex: 4,
      optionDestructiveIndex: 3,
      clicked: 0
    };
  },
  methods: {
    handleBtnPress() {
      ActionSheet.show(
        {
          options: this.btnOptions,
          cancelButtonIndex: this.optionCancelIndex,
          destructiveButtonIndex: this.optionDestructiveIndex,
          title: "Select An Option"
        },
        buttonIndex => {
          this.clicked = this.btnOptions[buttonIndex];
        }
      );
    }
  }
};
</script>
