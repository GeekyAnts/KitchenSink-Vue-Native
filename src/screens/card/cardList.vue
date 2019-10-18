<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Card List</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card :style="{ marginBottom: 15 }">
        <nb-card-item header bordered>
          <nb-text>Social Applications</nb-text>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon
              name="logo-googleplus"
              :style="{ color: '#DD5044' }"
            ></nb-icon>
            <nb-text>
              Google Plus
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon
              name="logo-facebook"
              :style="{ color: '#3B579D' }"
            ></nb-icon>
            <nb-text>
              Facebook
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon
              name="logo-twitter"
              :style="{ color: '#55ACEE' }"
            ></nb-icon>
            <nb-text>
              Twitter
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon name="logo-reddit" :style="{ color: '#FF4500' }"></nb-icon>
            <nb-text>
              Reddit
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon
              name="logo-linkedin"
              :style="{ color: '#007BB6' }"
            ></nb-icon>
            <nb-text>
              LinkedIn
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>

        <nb-card-item>
          <nb-left>
            <nb-icon
              name="logo-youtube"
              :style="{ color: '#D62727' }"
            ></nb-icon>
            <nb-text>
              YouTube
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
