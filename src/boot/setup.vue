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
      getTheme: nativeBaseThemeComponent
    };
  }
};
</script>
