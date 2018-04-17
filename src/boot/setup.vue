<template>
   <nb-style-provider :style="getTheme(nbVariables)">
        <app></app>
    </nb-style-provider>
</template>


<script>
import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";

import nativeBaseThemeComponent from "../theme/components";
import nativeBaseVariables from "../theme/variables/commonColor";
import App from "../App.vue";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

export default {
  components: { App },
  data: function() {
    return {
      nbVariables: nativeBaseVariables,
      getTheme: nativeBaseThemeComponent,
      isAppReady: false
    };
  },
  beforeMount: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>
