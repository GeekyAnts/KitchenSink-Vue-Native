<template>
  <nb-container>
    <nb-header hasTabs>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title> Advanced Tabs</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-tabs :style="{ elevation: 3 }">
      <nb-tab :heading="getHeadingCompForTab1()">
        <tab-one />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab2()">
        <tab-two />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab3()">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import React from "react";
import { TabHeading, Icon, Text } from "native-base";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";

export default {
  components: { TabOne, TabTwo, TabThree },
  methods: {
    getHeadingCompForTab1() {
      return (
        <TabHeading>
          <Icon name="camera" />
          <Text>Camera</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab2() {
      return (
        <TabHeading>
          <Text>No Icon</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab3() {
      return (
        <TabHeading>
          <Icon name="apps" />
        </TabHeading>
      );
    }
  }
};
</script>
