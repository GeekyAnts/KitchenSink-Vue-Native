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
        <nb-title>Radio</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-list-item :selected="radio1" :onPress="toggleRadio1">
        <nb-left>
          <nb-text>Lunch Break</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="radio1" :onPress="toggleRadio1" />
          <!-- <text v-if="radio1" :class="[{'text-primary': radio1==true}]">
                      checked
                    </text> -->
        </nb-right>
      </nb-list-item>
      <nb-list-item :selected="radio2" :onPress="toggleRadio2">
        <nb-left>
          <nb-text>Daily Stand Up</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="radio2" :onPress="toggleRadio2" />
          <!-- <text v-if="radio2" :class="[{'text-warning': radio2==true}]">
                    checked
                </text> -->
        </nb-right>
      </nb-list-item>
      <nb-list-item :selected="radio3" :onPress="toggleRadio3">
        <nb-left>
          <nb-text>Finish List Screen</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="radio3" :onPress="toggleRadio3" />
          <!-- <text v-if="radio3" :class="[{'text-success': radio3==true}]">
                    checked
                  </text> -->
        </nb-right>
      </nb-list-item>
      <nb-list-item :selected="radio4" :onPress="toggleRadio4">
        <nb-left>
          <nb-text>Discussion with Client</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="radio4" :onPress="toggleRadio4" />
          <!-- <text :class="[{'text-danger': radio4==true}]">
                  Checked
                </text> -->
          <!-- <text v-if="radio4" :class="[{'text-danger': radio4==true}, 'bg-primary']">
                  checked
                </text> -->
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true,
      textDanger: "text-danger",
      stylesObj: {
        checkBoxPaddingTop: {
          paddingTop: 15
        },
        checkBoxBgColor: {
          backgroundColor: "blue",
          paddingTop: 20
        }
      }
    };
  },
  methods: {
    toggleRadio1() {
      this.radio1 = true;
      this.radio2 = false;
      this.radio3 = false;
      this.radio4 = false;
    },
    toggleRadio2() {
      this.radio1 = false;
      this.radio2 = true;
      this.radio3 = false;
      this.radio4 = false;
    },
    toggleRadio3() {
      this.radio1 = false;
      this.radio2 = false;
      this.radio3 = true;
      this.radio4 = false;
    },
    toggleRadio4() {
      this.radio1 = false;
      this.radio2 = false;
      this.radio3 = false;
      this.radio4 = true;
    }
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
.text-primary {
  color: blue;
}
.text-warning {
  color: yellow;
}
.text-success {
  color: green;
}
.text-danger {
  color: rgb(245, 9, 87);
}
.bg-primary {
  background-color: aqua;
}
</style>
