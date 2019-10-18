<template>
  <nb-container :style="stylesObj.container">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Basic</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <view :style="stylesObj.iconContainer">
        <nb-icon
          name="logo-apple"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="pizza"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="person"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="beer"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="bicycle"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="navigate"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="cloud-circle"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="pie"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="bookmarks"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="pulse"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="camera"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="mic-off"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="film"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="flame"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="paper"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="paper-plane"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="speedometer"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="cart"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="flask"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="cloudy-night"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="partly-sunny"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="paw"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="rose"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="pint"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="shuffle"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="logo-game-controller-a"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="glasses"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="microphone"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="keypad"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="color-filter"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="eye"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="mic-off"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="alarm"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="medkit"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-ionic"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="star-half"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="refresh"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="train"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="musical-notes"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="wine"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="nutrition"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="thunderstorm"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="grid"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="settings"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="chatbubbles"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="chatboxes"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="cog"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="baseball"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="bulb"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="calculator"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="rainy"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="videocam"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="play"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="disc"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="body"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="lock"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="skip-backward"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="key"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="flag"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="skip-forward"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="barcode"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-tux"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="copy"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="stopwatch"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="medical"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="archive"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="bookmark"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="clipboard"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="happy"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="share"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="bluetooth"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="search"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="wifi"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="hand"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="trash"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="images"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          active
          name="attach"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-facebook"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-googleplus"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-twitter"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-github"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-whatsapp"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-wordpress"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="logo-youtube"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
        <nb-icon
          name="mail"
          :style="{ width: 45, height: 45, justifyContent: 'center' }"
        />
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      stylesObj: {
        container: {
          flex: 1,
          backgroundColor: "#FFF"
        },
        iconContainer: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingLeft: 15
        },
        iconText: {
          fontSize: 12
        },
        icon: {
          width: 45,
          height: 45,
          justifyContent: "center"
        },
        col: {
          alignItems: "center",
          paddingHorizontal: 3
        },
        row: {
          paddingBottom: 20
        }
      }
    };
  }
};
</script>
