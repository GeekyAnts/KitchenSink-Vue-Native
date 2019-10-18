<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header
      :style="{ backgroundColor: '#dc4239' }"
      androidStatusBarColor="#dc2015"
      iosBarStyle="light-content"
    >
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" class="text-color-white" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title class="text-color-white">Title</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text>Header with Custom background color</nb-text>
    </nb-content>
  </nb-container>
</template>

<style>
.text-color-white {
  color: white;
}
</style>
