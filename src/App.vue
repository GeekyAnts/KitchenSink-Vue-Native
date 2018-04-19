 <template>
    <root>
      <app-navigation></app-navigation>
    </root>
</template>


<script>
import React from "react";
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/home/index.vue";
import SideBarScreen from "./screens/sidebar/index.vue";
import AnatomyScreen from "./screens/anatomy/index.vue";
import ActionSheetScreen from "./screens/actionSheet/";
import RegularActionSheetScreen from "./screens/actionSheet/regular";
import IconActionSheetScreen from "./screens/actionSheet/icon";

import HeaderScreen from "./screens/header";
import Header1Screen from "./screens/header/header1";
import Header2Screen from "./screens/header/header2";
import Header3Screen from "./screens/header/header3";
import Header4Screen from "./screens/header/header4";
import Header5Screen from "./screens/header/header5";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Anatomy: { screen: AnatomyScreen },
    Actionsheet: { screen: ActionSheetScreen },
    Header: { screen: HeaderScreen }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => {
      // console.log("props inside contentComponent", props);
      return <SideBarScreen {...props} />;
    }
  }
);

const AppNavigation = StackNavigator(
  {
    Drawer: { screen: Drawer },
    RegularActionSheet: { screen: RegularActionSheetScreen },
    IconActionSheet: { screen: IconActionSheetScreen },
    Header1: { screen: Header1Screen },
    Header2: { screen: Header2Screen },
    Header3: { screen: Header3Screen },
    Header4: { screen: Header4Screen },
    Header5: { screen: Header5Screen }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 

