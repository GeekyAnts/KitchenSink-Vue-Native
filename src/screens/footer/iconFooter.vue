<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Icon Footer</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder></nb-content>

    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1">
          <nb-icon name="apps" :active="tab1" />
        </nb-button>

        <nb-button :active="tab2" :onPress="toggleTab2">
          <nb-icon name="camera" :active="tab2" />
        </nb-button>

        <nb-button :active="tab3" :onPress="toggleTab3">
          <nb-icon name="compass" :active="tab3" />
        </nb-button>

        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon name="contact" :active="tab4" />
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  },
  methods: {
    toggleTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    toggleTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    }
  }
};
</script>
