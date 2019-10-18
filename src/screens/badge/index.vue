<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-badge class="mb-10">
        <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge primary class="mb-10">
        <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge success class="mb-10">
        <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge info class="mb-10">
        <nb-text>5</nb-text>
      </nb-badge>
      <nb-badge warning class="mb-10">
        <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge danger class="mb-10">
        <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge primary class="mb-10">
        <nb-icon name="star" class="icon-star" />
      </nb-badge>
      <nb-badge class="badge-custom-bg">
        <nb-text>1866</nb-text>
      </nb-badge>
    </nb-content>
  </nb-container>
</template>

<style>
.mb-10 {
  margin-bottom: 10;
}
.icon-star {
  font-size: 15;
  color: #fff;
  line-height: 20;
}
.badge-custom-bg {
  background-color: black;
}
</style>
