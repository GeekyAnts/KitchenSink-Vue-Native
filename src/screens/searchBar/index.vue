<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header searchBar rounded>
      <nb-item>
        <nb-icon active name="search" />
        <nb-input placeholder="Search" />
        <nb-icon active name="people" />
      </nb-item>
      <nb-button transparent>
        <nb-text>Search</nb-text>
      </nb-button>
    </nb-header>
    <nb-content padder>
      <nb-button block :onPress="() => this.props.navigation.openDrawer()">
        <Text>Back</Text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
