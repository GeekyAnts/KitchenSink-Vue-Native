<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Custom Row</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-grid>
      <nb-row :size="1" :style="{ backgroundColor: '#00CE9F' }"></nb-row>
      <nb-row :size="2" :style="{ backgroundColor: '#635DB7' }"></nb-row>
      <nb-row :size="4" :style="{ backgroundColor: '#DD9E2C' }"></nb-row>
    </nb-grid>
  </nb-container>
</template>
