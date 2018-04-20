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
            <nb-title>Simple Deck Swiper</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <view :style="{flex: 1, padding: 12}">
            <nb-deck-swiper
                :dataSource="cardItemsArr"
                :looping="isLoopingRequired"
                :renderEmpty="handleCardEmpty"
                :renderItem="handleCardRendering"
            >
            </nb-deck-swiper>
        </view>
</template>

<script>
import React from "react";
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import cardOne from "../../../assets/swiper-1.png";
import cardTwo from "../../../assets/swiper-2.png";
import cardThree from "../../../assets/swiper-3.png";
import cardFour from "../../../assets/swiper-4.png";
export default {
  data: function() {
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
    handleCardEmpty: function() {
      return (
        <View>
          <Text>Over </Text>
        </View>
      );
    },
    handleCardRendering: function(item) {
      return (
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={item.image} />
              <Body>
                <Text>{item.text}</Text>
                <Text note>NativeBase</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "cover",
                width: null,
                flex: 1,
                height: 300
              }}
              source={item.image}
            />
          </CardItem>
          <CardItem>
            <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
            <Text>{item.name}</Text>
          </CardItem>
        </Card>
      );
    }
  }
};
</script>
