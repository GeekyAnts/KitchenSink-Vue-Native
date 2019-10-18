<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header noShadow>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header No Shadow</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="menu" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Header with noShadow prop</nb-text>
    </nb-content>
  </nb-container>
</template>
