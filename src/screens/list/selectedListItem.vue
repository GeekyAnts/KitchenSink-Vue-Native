<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>List Item Selected</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <flat-list
        :data="listItemArr"
        :keyExtractor="(item, index) => String(index)"
        :renderItem="({ item, index }) => getFlatListRenderItem(item, index)"
      >
      </flat-list>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import { ListItem, Left, Text, Right, Icon } from "native-base";

export default {
  data() {
    return {
      listItemArr: [
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Alberto Moreno",
        "Emre Can",
        "Joe Allen",
        "Phil Coutinho"
      ],
      selected: "Simon Mignolet"
      //   that123: this
    };
  },

  methods: {
    updatedSelectedItem(value) {
      this.selected = value;
    },
    getFlatListRenderItem(item) {
      return (
        <ListItem
          selected={this.selected === item}
          onPress={() => this.updatedSelectedItem(item)}
        >
          <Left>
            <Text>{item}</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    }
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
</style>
