<template>
  <nb-card :style="{ elevation: 3 }">
    <nb-cardItem>
      <nb-left>
        <nb-thumbnail :source="item.image" />
        <nb-body>
          <nb-text>{{ item.text }}</nb-text>
          <nb-text note>NativeBase</nb-text>
        </nb-body>
      </nb-left>
    </nb-cardItem>
    <nb-cardItem cardBody>
      <image
        :style="{
          resizeMode: 'cover',
          width: null,
          flex: 1,
          height: 300
        }"
        :source="item.image"
      />
    </nb-cardItem>
    <nb-cardItem>
      <nb-icon-nb name="ios-heart" :style="{ color: '#ED4A6A' }" />
      <nb-text>{{ item.name }}</nb-text>
    </nb-cardItem>
  </nb-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>
