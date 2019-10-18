<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Bordered CardItem</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card :style="{ marginBottom: 15 }" transparent>
        <nb-card-item header bordered>
          <nb-text>NativeBase</nb-text>
        </nb-card-item>

        <nb-card-item bordered>
          <nb-body>
            <nb-text
              >NativeBase is a free and open source framework that enable
              developers to build high-quality mobile apps using React Native
              iOS and Android apps with a fusion of ES6.</nb-text
            >
          </nb-body>
        </nb-card-item>

        <nb-card-item bordered>
          <nb-body>
            <nb-text
              >NativeBase builds a layer on top of React Native that provides
              you with basic set of components for mobile application
              development.</nb-text
            >
          </nb-body>
        </nb-card-item>

        <nb-card-item bordered>
          <nb-body>
            <nb-text
              >Get on the mobile fast track with NativeBase, the fastest-growing
              platform and tool set for iOS and Android development.</nb-text
            >
          </nb-body>
        </nb-card-item>

        <nb-card-item footer bordered>
          <nb-text>GeekyAnts</nb-text>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
