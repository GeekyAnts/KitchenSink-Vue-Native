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
import Header6Screen from "./screens/header/header6";
import Header7Screen from "./screens/header/header7";
import Header8Screen from "./screens/header/header8";
import HeaderNoShadowScreen from "./screens/header/headerNoShadow";
import HeaderSpanScreen from "./screens/header/headerSpan";

import FooterScreen from "./screens/footer";
import BadgeFooterScreen from "./screens/footer/badgeFooter";
import BasicFooterScreen from "./screens/footer/basicFooter";
import IconFooterScreen from "./screens/footer/iconFooter";
import IconTextFooterScreen from "./screens/footer/iconTextFooter";

import BadgeScreen from "./screens/badge";

import ButtonScreen from "./screens/button";
import BlockButtonScreen from "./screens/button/blockButton";
import CustomButtonScreen from "./screens/button/customButton";
import DefaultButtonScreen from "./screens/button/defaultButton";
import DisabledButtonScreen from "./screens/button/disableButton";
import FullButtonScreen from "./screens/button/fullButton";
import IconButtonScreen from "./screens/button/iconButton";
import OutlineButtonScreen from "./screens/button/outlineButton";
import RoundedButtonScreen from "./screens/button/roundedButton";
import TransparentButtonScreen from "./screens/button/transparentButton";

import CardScreen from "./screens/card";
import BasicCardScreen from "./screens/card/basicCard";
import CardHeaderAndFooterScreen from "./screens/card/cardHeaderAndFooter";
import CardImageScreen from "./screens/card/cardImage";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Anatomy: { screen: AnatomyScreen },
    Actionsheet: { screen: ActionSheetScreen },
    Header: { screen: HeaderScreen },
    Footer: { screen: FooterScreen },
    NHBadge: { screen: BadgeScreen },
    NHButton: { screen: ButtonScreen },
    NHCard: { screen: CardScreen }
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
    Header5: { screen: Header5Screen },
    Header6: { screen: Header6Screen },
    Header7: { screen: Header7Screen },
    Header8: { screen: Header8Screen },
    HeaderNoShadow: { screen: HeaderNoShadowScreen },
    HeaderSpan: { screen: HeaderSpanScreen },

    BadgeFooter: { screen: BadgeFooterScreen },
    BasicFooter: { screen: BasicFooterScreen },
    IconFooter: { screen: IconFooterScreen },
    IconText: { screen: IconTextFooterScreen },

    Block: { screen: BlockButtonScreen },
    Custom: { screen: CustomButtonScreen },
    Default: { screen: DefaultButtonScreen },
    Disabled: { screen: DisabledButtonScreen },
    Full: { screen: FullButtonScreen },
    IconBtn: { screen: IconButtonScreen },
    Outline: { screen: OutlineButtonScreen },
    Rounded: { screen: RoundedButtonScreen },
    Transparent: { screen: TransparentButtonScreen },

    BasicCard: { screen: BasicCardScreen },
    NHCardHeaderAndFooter: { screen: CardHeaderAndFooterScreen },
    NHCardImage: { screen: CardImageScreen }
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

