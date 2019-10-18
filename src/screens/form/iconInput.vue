<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Icon Input</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-icon active name="home" />
          <nb-input placeholder="Icon Textbox" />
        </nb-item>
        <nb-item>
          <nb-input placeholder="Icon Alignment in Textbox" />
          <nb-icon active name="swap" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
