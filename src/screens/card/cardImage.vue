<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Card Image</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card>
        <nb-card-item>
          <nb-left>
            <nb-thumbnail :source="logo"></nb-thumbnail>
            <nb-body>
              <nb-text>NativeBase</nb-text>
              <nb-text note>GeekyAnts</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item>

        <nb-card-item cardBody>
          <image
            :source="cardImage"
            class="card-item-image"
            :style="stylesObj.cardItemImage"
          />
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-button transparent>
              <nb-icon name="thumbs-up" active></nb-icon>
              <nb-text>4923 Likes</nb-text>
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-button transparent>
              <nb-icon name="chatbubbles" active></nb-icon>
              <nb-text>89 Comments</nb-text>
            </nb-button>
          </nb-body>
          <nb-right>
            <nb-text>11h ago</nb-text>
          </nb-right>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import logo from "../../../assets/logo.png";
import cardImage from "../../../assets/drawer-cover.png";
export default {
  data() {
    return {
      logo,
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover"
        }
      }
    };
  }
};
</script>

<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  flex: 1;
  height: 200;
}
</style>
