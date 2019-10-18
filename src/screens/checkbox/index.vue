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
        <nb-title>Check Box</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content>
      <nb-list-item button :onPress="toggleSwitch1">
        <nb-checkbox :checked="checkbox1" :onPress="toggleSwitch1">
        </nb-checkbox>
        <nb-body>
          <nb-text>Lunch Break</nb-text>
        </nb-body>
      </nb-list-item>

      <nb-list-item button :onPress="toggleSwitch2">
        <nb-checkbox color="red" :checked="checkbox2" :onPress="toggleSwitch2">
        </nb-checkbox>
        <nb-body>
          <nb-text>Daily Stand Up</nb-text>
        </nb-body>
      </nb-list-item>

      <nb-list-item button :onPress="toggleSwitch3">
        <nb-checkbox
          color="green"
          :checked="checkbox3"
          :onPress="toggleSwitch3"
        >
        </nb-checkbox>
        <nb-body>
          <nb-text>Finish list Screen</nb-text>
        </nb-body>
      </nb-list-item>

      <nb-list-item button :onPress="toggleSwitch4">
        <nb-checkbox color="#000" :checked="checkbox4" :onPress="toggleSwitch4">
        </nb-checkbox>
        <nb-body>
          <nb-text>Discussion with Client</nb-text>
        </nb-body>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: false
    };
  },
  methods: {
    toggleSwitch1() {
      this.checkbox1 = !this.checkbox1;
    },
    toggleSwitch2() {
      this.checkbox2 = !this.checkbox2;
    },
    toggleSwitch3() {
      this.checkbox3 = !this.checkbox3;
    },
    toggleSwitch4() {
      this.checkbox4 = !this.checkbox4;
    }
  }
};
</script>
