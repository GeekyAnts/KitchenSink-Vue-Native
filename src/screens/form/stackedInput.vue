<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Stacked Label</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item stackedLabel>
          <nb-label>Username</nb-label>
          <nb-input />
        </nb-item>
        <nb-item stackedLabel last>
          <nb-label>Password</nb-label>
          <nb-input secureTextEntry />
        </nb-item>
      </nb-form>
      <nb-button block :style="{ margin: 15, marginTop: 50 }">
        <nb-text>Sign In</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
