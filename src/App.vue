<template>
    <root>
        <app-navigation></app-navigation>
    </root>
</template>


<script>
import { StackNavigator } from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/home/index";
const AppNavigation = StackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script>
