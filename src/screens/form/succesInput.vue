<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Success Input</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item success>
          <nb-input disabled placeholder="Textbox with Success Input" />
          <nb-icon-nb name="ios-checkmark-circle" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
