<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Rounded Button</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder class="content-wrapper">
      <nb-button rounded light :style="{ marginBottom: 20 }">
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button rounded info :style="{ marginBottom: 20 }">
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button rounded primary :style="{ marginBottom: 20 }">
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button rounded success :style="{ marginBottom: 20 }">
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button rounded warning :style="{ marginBottom: 20 }">
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button rounded danger :style="{ marginBottom: 20 }">
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button rounded dark :style="{ marginBottom: 20 }">
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<style>
.content-wrapper {
  background-color: #fff;
  padding: 20;
}
</style>
