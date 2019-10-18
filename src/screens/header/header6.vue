<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="search" />
        </nb-button>
        <nb-button transparent>
          <nb-icon name="heart" />
        </nb-button>
        <nb-button transparent>
          <nb-icon name="more" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Header with multiple Icon Buttons</nb-text>
    </nb-content>
  </nb-container>
</template>
