<template>
  <nb-container :style="stylesObj.container">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Icons</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-grid>
        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-apple" :style="{ color: '#999' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-apple
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="pizza" :style="{ color: '#ffc125' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              pizza
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="person" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              person
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="beer" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              beer
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="bicycle" :style="{ color: '#663399' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              bicycle
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="navigate" :style="{ color: '#32db64' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              navigate
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="cloud-circle" :style="{ color: '#27a' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              cloud-circle
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="pie" :style="{ color: '#fac125' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              pie
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="bookmarks" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              bookmarks
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="pulse" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              pulse
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon active name="camera" :style="{ color: '#aaa' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              camera
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="mic-off" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              mic-off
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="film" :style="{ color: 'brown' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              film
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="flame" :style="{ color: 'orange' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              flame
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="paper" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              paper
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="paper-plane" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              paper-plane
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="cart" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              cart
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="flask" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              flask
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="paw" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              paw
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="rose" :style="{ color: 'pink' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              rose
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="pint" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              pint
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="shuffle" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              shuffle
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="keypad" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              keypad
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="eye" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              eye
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="glasses" :style="{ color: '#aaa' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              glasses
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="microphone" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              microphone
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="color-filter" :style="{ color: 'purple' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              color-filter
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="alarm" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              alarm
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="medkit" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              medkit
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-ionic" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              ionic
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="refresh" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              refresh
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="star-half" :style="{ color: 'gold' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              star-half
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="train" :style="{ color: '#E14343' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              train
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="wine" :style="{ color: 'brown' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              wine
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="partly-sunny" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              partly-sunny
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon active name="nutrition" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              nutrition
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="grid" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              grid
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="settings" :style="{ color: '#555' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              settings
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="chatbubbles" :style="{ color: '#27a' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              chatbubbles
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="speedometer" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              speedometer
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon active name="chatboxes" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              chatboxes
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="cog" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              cog
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="baseball" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              baseball
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="bulb" :style="{ color: 'gold' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              bulb
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="calculator" :style="{ color: '#889' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              calculator
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="rainy" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              rainy
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="videocam" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              videocam
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="play" :style="{ color: '#f53d3d' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              play
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="disc" :style="{ color: '#c76' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              disc
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="body" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              body
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="lock" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              lock
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="key" :style="{ color: 'gold' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              key
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="flag" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              flag
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="skip-forward" :style="{ color: '#999' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              skip-forward
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-github" :style="{ color: 'brown' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-github
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="barcode" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              barcode
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-tux" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-tux
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="copy" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              copy
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="stopwatch" :style="{ color: '#1df' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              stopwatch
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="medical" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              medical
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="archive" :style="{ color: 'brown' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              archive
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="bookmark" :style="{ color: 'green' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              bookmark
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="clipboard" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              clipboard
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="happy" :style="{ color: '#ffc125' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              happy
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="share" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              share
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="bluetooth" :style="{ color: '#387ef5' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              bluetooth
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="search" :style="{ color: '#777' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              search
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="wifi" :style="{ color: 'blue' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              wifi
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon active name="hand" :style="{ color: '#EBAB7F' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              hand
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="trash" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              trash
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="images" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              images
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="attach" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              attach
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-facebook" :style="{ color: '#46639E' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-facebook
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-googleplus" :style="{ color: '#DC4A38' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-googleplus
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-twitter" :style="{ color: '#1DA1F2' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-twitter
            </nb-text>
          </nb-col>
        </nb-row>

        <nb-row :style="stylesObj.row">
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-github" :style="{ color: 'red' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-github
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-whatsapp" :style="{ color: '#000' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-whatsapp
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-wordpress" :style="{ color: '#46639E' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-wordpress
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="logo-youtube" :style="{ color: '#DC4A38' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              logo-youtube
            </nb-text>
          </nb-col>
          <nb-col :style="stylesObj.col">
            <nb-icon name="mail" :style="{ color: '#1DA1F2' }" />
            <nb-text :numberOfLines="1" :style="stylesObj.iconText">
              mail
            </nb-text>
          </nb-col>
        </nb-row>
      </nb-grid>
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
