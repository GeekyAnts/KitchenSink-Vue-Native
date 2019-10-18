<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Simple Deck Swiper</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <view :style="{ flex: 1, padding: 12 }">
      <nb-deck-swiper
        :dataSource="cardItemsArr"
        :looping="isLoopingRequired"
        :renderEmpty="handleCardEmpty"
        :renderItem="handleCardRendering"
      >
      </nb-deck-swiper>
    </view>
  </nb-container>
</template>

<script>
import React from "react";
import { View, Text } from "react-native";
import cardOne from "../../../../assets/swiper-1.png";
import cardTwo from "../../../../assets/swiper-2.png";
import cardThree from "../../../../assets/swiper-3.png";
import cardFour from "../../../../assets/swiper-4.png";

import CardComponent from "../common/card";

export default {
  data() {
    return {
      cardItemsArr: [
        {
          text: "Card One",
          name: "One",
          image: cardOne
        },
        {
          text: "Card Two",
          name: "Two",
          image: cardTwo
        },
        {
          text: "Card Three",
          name: "Three",
          image: cardThree
        },
        {
          text: "Card Four",
          name: "Four",
          image: cardFour
        }
      ],
      isLoopingRequired: false
    };
  },
  methods: {
    handleCardEmpty() {
      return (
        <View>
          <Text>Over </Text>
        </View>
      );
    },
    handleCardRendering(item) {
      return <CardComponent item={item} />;
    }
  }
};
</script>
