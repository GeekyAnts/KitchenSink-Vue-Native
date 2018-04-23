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
import CardListScreen from "./screens/card/cardList";
import CardShowcaseScreen from "./screens/card/cardShowcase";
import CardTransparentScreen from "./screens/card/cardTransparent";
import CardBorderedScreen from "./screens/card/cardBordered";
import CardItemButtonScreen from "./screens/card/carItemButton";

import CheckboxScreen from "./screens/checkbox";

import DeckSwiperScreen from "./screens/deckSwiper";
import SimpleDeckSwiperScreen from "./screens/deckSwiper/simpleDeckSwiper/index";
import AdvanceDeckSwiperScreen from "./screens/deckSwiper/advancedDeckSwiper/index";

import FabScreen from "./screens/fab";
import BasicFabScreen from "./screens/fab/basicFab";
import MultipleFabIconScreen from "./screens/fab/multipleFabIcon";

import IconsScreen from "./screens/icons";
import BasicIconScreen from "./screens/icons/basicIon";
import FamilyIconScreen from "./screens/icons/familyIcon";
import SimpleIconsScreen from "./screens/icons/icon";
import PlatformSpecificIconScreen from "./screens/icons/platformSpecificIcon";

import LayoutScreen from "./screens/layout";
import ColumnLayoutScreen from "./screens/layout/columnLayout";
import CustomColumnLayoutScreen from "./screens/layout/customColumnLayout";
import RowLayoutScreen from "./screens/layout/rowLayout";
import CustomRowLayoutScreen from "./screens/layout/customRowLayout";
import NestedLayoutScreen from "./screens/layout/nestedLayout";

import ListScreen from "./screens/list";
import BasicListScreen from "./screens/list/basicList";
import ListAvatarScreen from "./screens/list/avatarList";
import ListDividerScreen from "./screens/list/dividerList";
import ListHeaderScreen from "./screens/list/headerList";
import ListIconScreen from "./screens/list/iconList";
import ListSeparatorScreen from "./screens/list/separatorList";
import ListThumbnailScreen from "./screens/list/thumbnailList";
import ListItemSelectedScreen from "./screens/list/selectedListItem";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Anatomy: { screen: AnatomyScreen },
    Actionsheet: { screen: ActionSheetScreen },
    Header: { screen: HeaderScreen },
    Footer: { screen: FooterScreen },
    NHBadge: { screen: BadgeScreen },
    NHButton: { screen: ButtonScreen },
    NHCard: { screen: CardScreen },
    NHCheckbox: { screen: CheckboxScreen },
    NHDeckSwiper: { screen: DeckSwiperScreen },
    NHFab: { screen: FabScreen },
    NHIcon: { screen: IconsScreen },
    NHLayout: { screen: LayoutScreen },
    NHList: { screen: ListScreen }
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
    NHCardImage: { screen: CardImageScreen },
    NHCardList: { screen: CardListScreen },
    NHCardShowcase: { screen: CardShowcaseScreen },
    NHCardTransparent: { screen: CardTransparentScreen },
    NHCardItemBordered: { screen: CardBorderedScreen },
    NHCardItemButton: { screen: CardItemButtonScreen },

    SimpleDeck: { screen: SimpleDeckSwiperScreen },
    AdvancedDeck: { screen: AdvanceDeckSwiperScreen },

    BasicFab: { screen: BasicFabScreen },
    MultipleFab: { screen: MultipleFabIconScreen },

    BasicIcon: { screen: BasicIconScreen },
    IconFamily: { screen: FamilyIconScreen },
    Icons: { screen: SimpleIconsScreen },
    PlatformSpecificIcon: { screen: PlatformSpecificIconScreen },

    ColumnNB: { screen: ColumnLayoutScreen },
    CustomCol: { screen: CustomColumnLayoutScreen },
    RowNB: { screen: RowLayoutScreen },
    CustomRow: { screen: CustomRowLayoutScreen },
    NestedGrid: { screen: NestedLayoutScreen },

    NHBasicList: { screen: BasicListScreen },
    NHListAvatar: { screen: ListAvatarScreen },
    NHListDivider: { screen: ListDividerScreen },
    NHListHeader: { screen: ListHeaderScreen },
    NHListIcon: { screen: ListIconScreen },
    NHListSeparator: { screen: ListSeparatorScreen },
    NHListThumbnail: { screen: ListThumbnailScreen },
    NHListItemSelected: { screen: ListItemSelectedScreen }
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

