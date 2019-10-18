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
        <nb-title>Picker</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content>
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#4CDA64' }">
            <nb-icon name="arrow-dropdown" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Pick SIM</nb-text>
        </nb-body>
        <nb-right>
          <nb-picker
            note
            mode="dropdown"
            :style="{ width: 120 }"
            :selectedValue="selected1"
            :onValueChange="onValueChange"
          >
            <item label="TATA" value="key0" />
            <item label="AIRTEL" value="key1" />
          </nb-picker>
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>

<script>
import { Picker } from "native-base";

export default {
  components: { Item: Picker.Item },
  data() {
    return {
      selected1: "key1"
    };
  },
  methods: {
    onValueChange(value) {
      this.selected1 = value;
    }
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
</style>
