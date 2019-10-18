<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Disabled</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content class="content-wrapper">
      <view class="view-wrapper">
        <nb-button disabled light :style="{ marginBottom: 20 }">
          <nb-text>Default</nb-text>
        </nb-button>
        <nb-button disabled bordered :style="{ marginBottom: 20 }">
          <nb-text>Outline</nb-text>
        </nb-button>
        <nb-button disabled rounded :style="{ marginBottom: 20 }">
          <nb-text>Rounded</nb-text>
        </nb-button>
        <nb-button disabled large :style="{ marginBottom: 20 }">
          <nb-text>Custom</nb-text>
        </nb-button>
        <nb-button disabled iconRight :style="{ marginBottom: 20 }">
          <nb-text>Icon Button</nb-text>
          <nb-icon name="home" />
        </nb-button>
        <nb-button disabled block :style="{ marginBottom: 20 }">
          <nb-text>Block</nb-text>
        </nb-button>
        <nb-button disabled full :style="{ marginBottom: 20 }">
          <nb-text>Full</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<style>
.content-wrapper {
  background-color: #fff;
  padding: 20;
}
.view-wrapper {
  padding-horizontal: 20;
  padding-top: 20;
}
</style>
