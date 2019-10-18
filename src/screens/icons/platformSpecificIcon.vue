<template>
  <nb-container :style="stylesObj.container">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Platform</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-grid>
        <nb-row>
          <nb-col :style="stylesObj.col">
            <nb-icon ios="ios-person" android="md-person" />
            <nb-text>person</nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon ios="ios-apps" android="md-apps" />
            <nb-text>apps</nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon ios="ios-alarm" android="md-alarm" />
            <nb-text>alarm</nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon ios="ios-paper" android="md-paper" />
            <nb-text>paper</nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon ios="ios-cart" android="md-cart" />
            <nb-text>cart</nb-text>
          </nb-col>
        </nb-row>
      </nb-grid>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      stylesObj: {
        container: {
          flex: 1,
          backgroundColor: "#FFF"
        },
        iconContainer: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingLeft: 15
        },
        iconText: {
          fontSize: 12
        },
        icon: {
          width: 45,
          height: 45,
          justifyContent: "center"
        },
        col: {
          alignItems: "center",
          paddingHorizontal: 3
        },
        row: {
          paddingBottom: 20
        }
      }
    };
  }
};
</script>
