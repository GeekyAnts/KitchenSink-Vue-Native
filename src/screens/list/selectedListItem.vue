<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.goBack()"
            >
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
                :renderItem="({item, index}) => getFlatListRenderItem(item, index)"
            >
            </flat-list>
        </nb-content>
      </nb-container>
</template>


<script>
import React from "react";
import { ListItem, Left, Text, Right, Icon } from "native-base";
import sankhadeep from "../../../assets/contacts/sankhadeep.png";
import supriya from "../../../assets/contacts/supriya.png";
import himanshu from "../../../assets/contacts/himanshu.png";
import shweta from "../../../assets/contacts/shweta.png";
import shruti from "../../../assets/contacts/shruti.png";
import shivraj from "../../../assets/contacts/shivraj.jpg";

export default {
  data: function() {
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
    updatedSelectedItem: function(value) {
      this.selected = value;
    },
    getFlatListRenderItem: function(item, index) {
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
