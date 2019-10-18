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
      btnOptions: ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"],
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
          //   this.optionCancelIndex = this.clicked;
        }
      );
    }
  }
};
</script>
