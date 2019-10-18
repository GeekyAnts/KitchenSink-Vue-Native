<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
          <nb-text> Back </nb-text>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Headers</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-text> Cancel </nb-text>
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Header with Icon Button & Text Buttons</nb-text>
    </nb-content>
  </nb-container>
</template>
