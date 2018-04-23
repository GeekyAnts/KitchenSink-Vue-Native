<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('DrawerOpen')"
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
            <nb-list-item
                :selected="radio1"
                :onPress="toggleRadio1"
            >
                <nb-left>
                    <nb-text>Lunch Break</nb-text>
                </nb-left>
                <nb-right>
                    <nb-radio
                        :selected="radio1"
                        :onPress="toggleRadio1"
                    />
                </nb-right>
            </nb-list-item>
            <nb-list-item
                :selected="radio2"
                :onPress="toggleRadio2"
            >
                <nb-left>
                <nb-text>Daily Stand Up</nb-text>
                </nb-left>
                <nb-right>
                <nb-radio
                    :selected="radio2"
                    :onPress="toggleRadio2"
                />
                </nb-right>
            </nb-list-item>
            <nb-list-item
                :selected="radio3"
                :onPress="toggleRadio3"
            >
                <nb-left>
                  <nb-text>Finish List Screen</nb-text>
                </nb-left>
                <nb-right>
                  <nb-radio
                      :selected="radio3"
                      :onPress="toggleRadio3"
                  />
                </nb-right>
            </nb-list-item>
            <nb-list-item
                :selected="radio4"
                :onPress="toggleRadio4"
            >
                <nb-left>
                <nb-text>Discussion with Client</nb-text>
                </nb-left>
                <nb-right>
                <nb-radio
                    :selected="radio4"
                    :onPress="toggleRadio4"
                />
                </nb-right>
            </nb-list-item>
        </nb-content>
      </nb-container>
</template>


<script>
export default {
  data: function() {
    return {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    };
  },
  methods: {
    toggleRadio1: function() {
      this.radio1 = true;
      this.radio2 = false;
      this.radio3 = false;
      this.radio4 = false;
    },
    toggleRadio2: function() {
      this.radio1 = false;
      this.radio2 = true;
      this.radio3 = false;
      this.radio4 = false;
    },
    toggleRadio3: function() {
      this.radio1 = false;
      this.radio2 = false;
      this.radio3 = true;
      this.radio4 = false;
    },
    toggleRadio4: function() {
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
</style>
