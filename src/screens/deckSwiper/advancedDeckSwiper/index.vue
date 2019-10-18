<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Advanced Deck Swiper</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <view :style="{ flex: 1, padding: 12 }">
      <nb-deck-swiper
        ref="_deckSwiper"
        :dataSource="cardItemsArr"
        :looping="isLoopingRequired"
        :renderEmpty="handleCardEmpty"
        :renderItem="handleCardRendering"
      >
      </nb-deck-swiper>
    </view>
    <view :style="stylesObj.bottomBtnContainer">
      <nb-button iconLeft :onPress="handleDeckSwiperBackBtn">
        <nb-icon name="arrow-back" />
        <nb-text>Swipe Left</nb-text>
      </nb-button>
      <nb-button iconRight :onPress="handleDeckSwiperForwardBtn">
        <nb-text>Swipe Right</nb-text>
        <nb-icon name="arrow-forward" />
      </nb-button>
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
      isLoopingRequired: false,
      stylesObj: {
        bottomBtnContainer: {
          flexDirection: "row",
          flex: 1,
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          justifyContent: "space-between",
          padding: 15
        }
      }
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
    },
    handleDeckSwiperBackBtn() {
      this.$refs._deckSwiper._root.swipeLeft();
    },
    handleDeckSwiperForwardBtn() {
      this.$refs._deckSwiper._root.swipeRight();
    }
  }
};
</script>
