<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Basic Card</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card class="mb-15">
        <nb-card-item>
          <nb-body>
            <nb-text>This is just a basic card with some text to boot.</nb-text>
            <nb-text>Like it? Keep Scrolling...</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<style>
.mb-15 {
  margin-bottom: 15;
}
</style>
