<template>
  <nb-container :style="{ backgroundColor: '#FFF' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Icon Family</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Ionicons</nb-text>
        <nb-icon type="Ionicons" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Entypo</nb-text>
        <nb-icon type="Entypo" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Feather</nb-text>
        <nb-icon type="Feather" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">FontAwesome</nb-text>
        <nb-icon type="FontAwesome" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Foundation</nb-text>
        <nb-icon type="Foundation" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Material Icons</nb-text>
        <nb-icon type="MaterialIcons" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Material Community Icons</nb-text>
        <nb-icon
          type="MaterialCommunityIcons"
          name="home"
          :style="{ color: '#999' }"
        />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Octicons</nb-text>
        <nb-icon type="Octicons" name="home" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Zocial</nb-text>
        <nb-icon type="Zocial" name="dropbox" :style="{ color: '#999' }" />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Simple Line Icons</nb-text>
        <nb-icon
          type="SimpleLineIcons"
          name="home"
          :style="{ color: '#999' }"
        />
      </nb-list-item>
      <nb-list-item>
        <nb-text :style="{ width: 220 }">Evil Icons</nb-text>
        <nb-icon type="EvilIcons" name="trophy" :style="{ color: '#999' }" />
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
