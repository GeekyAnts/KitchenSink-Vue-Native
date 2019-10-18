<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Placeholder Label</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input placeholder="Username" />
        </nb-item>
        <nb-item last>
          <nb-input placeholder="Password" secureTextEntry />
        </nb-item>
      </nb-form>
      <nb-button block :style="{ margin: 15, marginTop: 50 }">
        <nb-text>Sign In</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
