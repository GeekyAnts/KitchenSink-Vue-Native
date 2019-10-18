<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
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

import FormScreen from "./screens/form";
import DisabledInputFormScreen from "./screens/form/disabledInput";
import ErrorInputFormScreen from "./screens/form/errorInput";
import FixedLabelInputFormScreen from "./screens/form/fixedLabelInput";
import FloatingLabelInputFormScreen from "./screens/form/floatingLabelInput";
import IconInputFormScreen from "./screens/form/iconInput";
import InlineInputFormScreen from "./screens/form/inlineLabelInput";
import PlaceholderInputFormScreen from "./screens/form/placeholderInput";
import RegularInputFormScreen from "./screens/form/regularInput";
import RoundedInputFormScreen from "./screens/form/roundedInput";
import StackedInputFormScreen from "./screens/form/stackedInput";
import SuccessInputFormScreen from "./screens/form/succesInput";
import TextAreaInputFormScreen from "./screens/form/textAreaInput";
import UnderLineInputFormScreen from "./screens/form/underLineInput";

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

// import ListSwipeScreen from "./screens/listSwipe";
// import BasicListSwipeScreen from "./screens/listSwipe/basicListSwipe";
// import MultiListSwipeScreen from "./screens/listSwipe/multiListSwiper";
// import CustomRowListSwipeScreen from "./screens/listSwipe/customRowListSwiper";

import PickerScreen from "./screens/picker";
import BackButtonPickerScreen from "./screens/picker/backButtonPicker";
import CustomHeaderPickerScreen from "./screens/picker/customHeaderPicker";
import HeaderPickerScreen from "./screens/picker/headerPicker";
import HeaderStylePickerScreen from "./screens/picker/headerStylePicker";
import PickerTextItemTextScreen from "./screens/picker/pickerTextItemText";
import PickerIconScreen from "./screens/picker/pickerWithIcon";
import PickerWithPlaceHolderScreen from "./screens/picker/placeHolderPicker";
import PickerWithPlaceHolderNoteScreen from "./screens/picker/placeholderPickerNote";
import RegularPickerScreen from "./screens/picker/regularPicker";

import RadioScreen from "./screens/radio";
import SearchScreen from "./screens/searchBar";

import SegmentScreen from "./screens/segment";
import SegmentHeaderScreen from "./screens/segment/segmentHeader";
import SegmentTabScreen from "./screens/segment/segmentTab";

import SpinnerScreen from "./screens/spinner";

import TabScreen from "./screens/tabs";
import BasicTabScreen from "./screens/tabs/basicTab";
import AdvanceTabScreen from "./screens/tabs/advanceTab";
import ScrollableTabaScreen from "./screens/tabs/scrollableTab";

import ThumbnailScreen from "./screens/thumbnail";

import ToastScreen from "./screens/toast";
import BasicToastScreen from "./screens/toast/basicToast";
import ToastButtonStyleScreen from "./screens/toast/toastButton";
import ToastDurationScreen from "./screens/toast/toastDuration";
import ToastPositionScreen from "./screens/toast/toastPosition";
import ToastTextScreen from "./screens/toast/toastText";
import ToastTypeScreen from "./screens/toast/toastType";

import TypographyScreen from "./screens/typography";

const Drawer = createDrawerNavigator(
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
    NHForm: { screen: FormScreen },
    NHIcon: { screen: IconsScreen },
    NHLayout: { screen: LayoutScreen },
    NHList: { screen: ListScreen },
    // ListSwipe: { screen: ListSwipeScreen },
    NHRadio: { screen: RadioScreen },
    NHSearchbar: { screen: SearchScreen },
    NHPicker: { screen: PickerScreen },
    Segment: { screen: SegmentScreen },
    NHSpinner: { screen: SpinnerScreen },
    NHTab: { screen: TabScreen },
    NHThumbnail: { screen: ThumbnailScreen },
    NHToast: { screen: ToastScreen },
    NHTypography: { screen: TypographyScreen }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBarScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
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

      DisabledInput: { screen: DisabledInputFormScreen },
      ErrorInput: { screen: ErrorInputFormScreen },
      FixedLabel: { screen: FixedLabelInputFormScreen },
      FloatingLabel: { screen: FloatingLabelInputFormScreen },
      IconInput: { screen: IconInputFormScreen },
      InlineLabel: { screen: InlineInputFormScreen },
      PlaceholderLabel: { screen: PlaceholderInputFormScreen },
      RegularInput: { screen: RegularInputFormScreen },
      RoundedInput: { screen: RoundedInputFormScreen },
      StackedLabel: { screen: StackedInputFormScreen },
      SuccessInput: { screen: SuccessInputFormScreen },
      TextArea: { screen: TextAreaInputFormScreen },
      UnderlineInput: { screen: UnderLineInputFormScreen },

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
      NHListItemSelected: { screen: ListItemSelectedScreen },

      // BasicListSwipe: { screen: BasicListSwipeScreen },
      // MultiListSwipe: { screen: MultiListSwipeScreen },
      // SwipeRowCustomStyle: { screen: CustomRowListSwipeScreen },

      BackButtonPicker: { screen: BackButtonPickerScreen },
      CustomHeaderPicker: { screen: CustomHeaderPickerScreen },
      HeaderPicker: { screen: HeaderPickerScreen },
      HeaderStylePicker: { screen: HeaderStylePickerScreen },
      PickerTextItemText: { screen: PickerTextItemTextScreen },
      PickerWithIcon: { screen: PickerIconScreen },
      PlaceholderPicker: { screen: PickerWithPlaceHolderScreen },
      PlaceholderPickerNote: { screen: PickerWithPlaceHolderNoteScreen },
      RegularPicker: { screen: RegularPickerScreen },

      BasicSegment: { screen: SegmentHeaderScreen },
      AdvSegment: { screen: SegmentTabScreen },

      BasicTab: { screen: BasicTabScreen },
      ConfigTab: { screen: AdvanceTabScreen },
      ScrollableTab: { screen: ScrollableTabaScreen },

      BasicToast: { screen: BasicToastScreen },
      ToastButton: { screen: ToastButtonStyleScreen },
      ToastDuration: { screen: ToastDurationScreen },
      ToastPosition: { screen: ToastPositionScreen },
      ToastText: { screen: ToastTextScreen },
      ToastType: { screen: ToastTypeScreen }
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
