<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Custom Size Button</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder class="content-wrapper">
      <nb-button small light :style="{ marginBottom: 20 }">
        <nb-text>Default Small </nb-text>
      </nb-button>
      <nb-button success info :style="{ marginBottom: 20 }">
        <nb-text>Success Default</nb-text>
      </nb-button>
      <nb-button large primary :style="{ marginBottom: 20 }">
        <nb-text>Dark Large</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<style>
.content-wrapper {
  padding: 20;
}
</style>
