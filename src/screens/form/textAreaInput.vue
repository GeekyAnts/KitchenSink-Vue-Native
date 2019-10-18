<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>TextArea</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-textarea :rowSpan="5" bordered placeholder="Textarea" />
    </nb-content>
  </nb-container>
</template>
