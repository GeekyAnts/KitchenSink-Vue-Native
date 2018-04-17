<template>
    <app-navigation></app-navigation>
</template>


<script>
import { StackNavigator } from "vue-native-router";
import Home from "./screens/home/index";
const AppNavigation = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home"
  }
);
export default {
  components: { AppNavigation }
};
</script>
