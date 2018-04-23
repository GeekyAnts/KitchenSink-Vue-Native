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
            <nb-title>Swipe Row Custom Style</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content :scrollEnabled="false">
            <nb-swipe-row 
                :style="{ backgroundColor: '#9370DB' }"
                :leftOpenValue="75"
                :rightOpenValue="-75"
                :left="getSwipeLeftComponet()"
                :right="getSwipeRightComponet()"
                :body="getSwipeBodyComponet()"
            />
        </nb-content>
    </nb-container>
</template>

<script>
import React from "react";
import { Button, Icon, Text, View } from "native-base";
export default {
  methods: {
    getSwipeLeftComponet: function() {
      return (
        <Button success onPress={() => alert("Add")}>
          <Icon active name="add" style={{ color: "#FFF" }} />
        </Button>
      );
    },
    getSwipeRightComponet: function() {
      return (
        <Button danger onPress={() => alert("Trash")}>
          <Icon active name="trash" />
        </Button>
      );
    },
    getSwipeBodyComponet: function() {
      return (
        <View style={{ paddingLeft: 20 }}>
          <Text>Swipe me to left and right</Text>
        </View>
      );
    }
  }
};
</script>

