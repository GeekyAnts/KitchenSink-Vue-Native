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
        <nb-title>Form & Inputs</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-list>
        <nb-list-item
          v-for="listItem in listItemArr"
          :key="listItem.route"
          button
          :onPress="() => this.props.navigation.navigate(listItem.route)"
        >
          <nb-left>
            <nb-text>
              {{ listItem.text }}
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" class="body-icon-color" />
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      listItemArr: [
        {
          route: "FixedLabel",
          text: "Fixed Label"
        },
        {
          route: "InlineLabel",
          text: "Inline Label"
        },
        {
          route: "FloatingLabel",
          text: "Floating Label"
        },
        {
          route: "PlaceholderLabel",
          text: "Placeholder Label"
        },
        {
          route: "StackedLabel",
          text: "Stacked Label"
        },
        {
          route: "RegularInput",
          text: "Regular Textbox"
        },
        {
          route: "UnderlineInput",
          text: "Underlined Textbox"
        },
        {
          route: "RoundedInput",
          text: "Rounded Textbox"
        },
        {
          route: "IconInput",
          text: "Icon Textbox"
        },
        {
          route: "SuccessInput",
          text: "Success Input Textbox"
        },
        {
          route: "ErrorInput",
          text: "Error Input Textbox"
        },
        {
          route: "DisabledInput",
          text: "Disabled Textbox"
        },
        {
          route: "TextArea",
          text: "TextArea"
        }
      ]
    };
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
</style>
