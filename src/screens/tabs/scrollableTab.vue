<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title> Scrollable Tabs</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-tabs :renderTabBar="getScollableTabComp">
      <nb-tab heading="Tab1">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Tab2">
        <tab-two />
      </nb-tab>
      <nb-tab heading="Tab3">
        <tab-three />
      </nb-tab>
      <nb-tab heading="Tab4">
        <tab-four />
      </nb-tab>
      <nb-tab heading="Tab5">
        <tab-five />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import React from "react";
import { ScrollableTab } from "native-base";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";
import TabFour from "./components/tabFour";
import TabFive from "./components/tabFive";

export default {
  components: { TabOne, TabTwo, TabThree, TabFour, TabFive },
  methods: {
    getScollableTabComp() {
      return <ScrollableTab />;
    }
  }
};
</script>
