<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Thumbnail</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-view :style="{ flex: 1, alignItems: 'center' }">
        <nb-text :style="{ marginBottom: 10 }">Square Thumbnail</nb-text>
        <nb-thumbnail
          square
          small
          :source="logo"
          :style="{ marginBottom: 10 }"
        />
        <nb-thumbnail square :source="logo" :style="{ marginBottom: 10 }" />
        <nb-thumbnail
          square
          large
          :source="logo"
          :style="{ marginBottom: 35 }"
        />

        <nb-text :style="{ marginBottom: 10 }">Circular Thumbnail</nb-text>
        <nb-thumbnail small :source="cover" :style="{ marginBottom: 10 }" />
        <nb-thumbnail :source="cover" :style="{ marginBottom: 10 }" />
        <nb-thumbnail large :source="cover" />
      </nb-view>
    </nb-content>
  </nb-container>
</template>

<script>
import logo from "../../../assets/splashscreen.png";
import cover from "../../../assets/web-cover1.jpg";
export default {
  data() {
    return {
      logo,
      cover
    };
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
</style>
