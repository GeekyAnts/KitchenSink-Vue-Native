<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Icon Button</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder class="content-wrapper">
      <view class="view-wrapper-1">
        <nb-button iconLeft light :style="{ marginBottom: 20 }">
          <nb-icon active name="arrow-back" />
          <nb-text>Back</nb-text>
        </nb-button>
        <nb-button iconRight light :style="{ marginBottom: 20 }">
          <nb-text>Next</nb-text>
          <nb-icon active name="arrow-forward" />
        </nb-button>
        <nb-button light :style="{ marginBottom: 20 }">
          <nb-icon active name="arrow-down" />
        </nb-button>
        <nb-button light :style="{ marginBottom: 20 }">
          <nb-icon active name="arrow-up" />
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft :style="{ marginBottom: 20 }">
          <nb-icon active name="home" />
          <nb-text>Home</nb-text>
        </nb-button>
        <nb-button
          iconLeft
          bordered
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="briefcase" />
          <nb-text>Work</nb-text>
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft success :style="{ marginBottom: 20 }">
          <nb-icon active name="people" />
          <nb-text>People</nb-text>
        </nb-button>
        <nb-button
          iconLeft
          success
          bordered
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="paw" />
          <nb-text>Animals</nb-text>
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft danger :style="{ marginBottom: 20 }">
          <nb-icon active name="people" />
          <nb-text>People</nb-text>
        </nb-button>
        <nb-button
          danger
          bordered
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="trash" />
        </nb-button>
        <nb-button
          danger
          transparent
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="trash" />
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft warning :style="{ marginBottom: 20 }">
          <nb-icon active name="warning" />
          <nb-text>Don't</nb-text>
        </nb-button>
        <nb-button
          warning
          bordered
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="warning" />
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft info :style="{ marginBottom: 20 }">
          <nb-icon active name="alert" />
          <nb-text>Help</nb-text>
        </nb-button>
        <nb-button info :style="{ marginBottom: 20, marginLeft: 10 }">
          <nb-icon active name="alert" />
        </nb-button>
      </view>

      <view class="view-wrapper-2">
        <nb-button iconLeft dark :style="{ marginBottom: 20 }">
          <nb-icon active name="cog" />
          <nb-text>Settings</nb-text>
        </nb-button>
        <nb-button
          dark
          transparent
          :style="{ marginBottom: 20, marginLeft: 10 }"
        >
          <nb-icon active name="cog" />
        </nb-button>
      </view>

      <nb-button iconLeft transparent :style="{ marginBottom: 20 }">
        <nb-icon active name="beer" />
        <nb-text>Pub</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<style>
.content-wrapper {
  background-color: #fff;
  padding: 20;
}
.view-wrapper-1 {
  flex-direction: row;
  justify-content: space-between;
}
.view-wrapper-2 {
  flex-direction: row;
}
</style>
