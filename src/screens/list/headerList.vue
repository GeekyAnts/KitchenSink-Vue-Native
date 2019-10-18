<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>List Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-list-item itemHeader first>
        <nb-text>COMEDY</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Hangover</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Horrible Bosses</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Wedding Crashers</nb-text>
      </nb-list-item>
      <nb-list-item last>
        <nb-text>Cop Out</nb-text>
      </nb-list-item>

      <nb-list-item itemHeader>
        <nb-text>HORROR</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>The Evil Dead</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Residential Evil</nb-text>
      </nb-list-item>
      <nb-list-item last>
        <nb-text>Conjuring</nb-text>
      </nb-list-item>

      <nb-list-item itemHeader>
        <nb-text>ACTION</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Terminator Genesis</nb-text>
      </nb-list-item>
      <nb-list-item>
        <nb-text>Fast And Furious</nb-text>
      </nb-list-item>
      <nb-list-item last>
        <nb-text>Top Gun</nb-text>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
