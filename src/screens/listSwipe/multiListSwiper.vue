<!-- TODO: Move to react-native-swipe-list-view -->

<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Multiple List Swipe</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content>
      <nb-list
        :leftOpenValue="75"
        :rightOpenValue="-75"
        :dataSource="getListArr()"
        :renderRow="getListItemRow"
        :renderLeftHiddenRow="getLeftHiddenRowComponet"
        :renderRightHiddenRow="getRighttHiddenRowComponet"
      >
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import React from "react";
import { ListView } from "react-native";
import { Button, Icon, Text, ListItem } from "native-base";
export default {
  data() {
    return {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      basic: true,
      listViewData: [
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Alberto Moreno",
        "Emre Can",
        "Joe Allen",
        "Phil Coutinho"
      ]
    };
  },
  methods: {
    deleteRow(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.listViewData];
      newData.splice(rowId, 1);
      this.listViewData = newData;
    },
    getLeftHiddenRowComponet(data) {
      return (
        <Button
          full
          onPress={() => alert(data)}
          style={{
            backgroundColor: "#CCC",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon active name="information-circle" />
        </Button>
      );
    },
    getRighttHiddenRowComponet(data, secId, rowId, rowMap) {
      return (
        <Button
          full
          danger
          onPress={() => this.deleteRow(secId, rowId, rowMap)}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon active name="trash" />
        </Button>
      );
    },
    getListArr() {
      return this.ds.cloneWithRows(this.listViewData);
    },
    getListItemRow(data) {
      return (
        <ListItem style={{ paddingLeft: 20 }}>
          <Text>{data}</Text>
        </ListItem>
      );
    }
  }
};
</script>
