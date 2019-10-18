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
        <nb-title>Headers</nb-title>
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
            <nb-icon name="arrow-forward" />
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
          route: "Header1",
          text: "Only Title"
        },
        {
          route: "Header2",
          text: "Icon Buttons"
        },
        {
          route: "Header3",
          text: "Text Buttons"
        },
        {
          route: "Header4",
          text: "Icon Button and Text Button"
        },
        {
          route: "Header5",
          text: "Icon and Text Buttons"
        },
        {
          route: "Header6",
          text: "Multiple Icon Buttons"
        },
        {
          route: "Header7",
          text: "Title and Subtitle"
        },
        {
          route: "Header8",
          text: "Custom Background Color"
        },
        {
          route: "HeaderSpan",
          text: "Header Span"
        },
        {
          route: "HeaderNoShadow",
          text: "Header without shadow"
        }
      ]
    };
  }
};
</script>
