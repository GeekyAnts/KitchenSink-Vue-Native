<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Disabled Input</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item disabled>
          <nb-input disabled placeholder="Disabled Textbox" />
          <nb-icon-nb name="ios-information-circle" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
