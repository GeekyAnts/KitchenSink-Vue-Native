<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Title</nb-title>
        <nb-subtitle>Subtitle</nb-subtitle>
      </nb-body>
      <nb-right> </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Header with Title & Subtitle</nb-text>
    </nb-content>
  </nb-container>
</template>
