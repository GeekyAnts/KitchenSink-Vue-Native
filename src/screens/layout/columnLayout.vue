<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Column Grid</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-grid>
      <nb-col :style="{ backgroundColor: '#635DB7' }"></nb-col>
      <nb-col :style="{ backgroundColor: '#00CE9F' }"></nb-col>
    </nb-grid>
  </nb-container>
</template>
