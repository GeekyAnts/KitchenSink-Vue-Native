<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left> </nb-left>
      <nb-body>
        <nb-title>Headers</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-button :onPress="() => this.props.navigation.goBack()">
        <nb-text>Back</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
