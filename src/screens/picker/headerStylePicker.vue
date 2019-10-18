<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body :style="{ flex: 3 }">
        <nb-title>Custom Header Style</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content>
      <nb-form>
        <nb-picker
          mode="dropdown"
          :iosIcon="getIosIcon()"
          :headerStyle="{ backgroundColor: '#b95dd3' }"
          :headerBackButtonTextStyle="{ color: '#fff' }"
          :headerTitleStyle="{ color: '#fff' }"
          :selectedValue="selected1"
          :onValueChange="onValueChange"
        >
          <item label="Wallet" value="key0" />
          <item label="ATM Card" value="key1" />
          <item label="Debit Card" value="key2" />
          <item label="Credit Card" value="key3" />
          <item label="Net Banking" value="key4" />
        </nb-picker>
      </nb-form>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import { Picker, Icon } from "native-base";

export default {
  components: { Item: Picker.Item },
  data() {
    return {
      selected1: "key1"
    };
  },
  methods: {
    onValueChange(value) {
      this.selected1 = value;
    },
    getIosIcon() {
      return <Icon name="ios-arrow-down" />;
    }
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
</style>
