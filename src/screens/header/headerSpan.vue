<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header span>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header Span</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text>Header span example</nb-text>
    </nb-content>
  </nb-container>
</template>
