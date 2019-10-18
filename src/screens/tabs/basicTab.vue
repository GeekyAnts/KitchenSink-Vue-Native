<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title> Basic Tabs</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-tabs>
      <nb-tab heading="Tab1">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Tab2">
        <tab-two />
      </nb-tab>
      <nb-tab heading="Tab3">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";

export default {
  components: { TabOne, TabTwo, TabThree }
};
</script>
