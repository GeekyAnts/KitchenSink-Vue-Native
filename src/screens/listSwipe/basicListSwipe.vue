<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Single SwipeRow</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content :scrollEnabled="false">
      <swipe-list-view
        :data="listData"
        :leftOpenValue="75"
        :stopLeftSwipe="100"
        :rightOpenValue="-75"
        :stopRightSwipe="-100"
        :keyExtractor="item => item.id.toString()"
      >
        <nb-view
          render-prop-fn="renderItem"
          arguments="data"
          :style="{
            padding: 20,
            height: 60,
            backgroundColor: '#fff',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1
          }"
        >
          <nb-text>{{ data.item.text }}</nb-text>
        </nb-view>
        <view
          render-prop-fn="renderHiddenItem"
          :style="{
            display: 'flex',
            flexDirection: 'row',
            height: 60
          }"
        >
          <nb-button success :onPress="alertAdd" :style="styles.swipeBtnLeft">
            <view :style="styles.swipeBtnIconContainer">
              <nb-icon name="add" :style="styles.swipeBtnIcon" />
            </view>
          </nb-button>
          <nb-button danger :onPress="alertTrash" :style="styles.swipeBtnRight">
            <view :style="styles.swipeBtnIconContainer">
              <nb-icon name="trash" :style="styles.swipeBtnIcon" />
            </view>
          </nb-button>
        </view>
      </swipe-list-view>
    </nb-content>
  </nb-container>
</template>

<script>
import { SwipeListView } from "react-native-swipe-list-view";
export default {
  components: {
    SwipeListView
  },
  data() {
    return {
      listData: [
        {
          id: 0,
          text: "Swipe me to left and right"
        }
      ],
      styles: {
        swipeBtnLeft: {
          flex: 1,
          height: "100%",
          justifyContent: "flex-start",
          borderRadius: 0
        },
        swipeBtnRight: {
          flex: 1,
          height: "100%",
          justifyContent: "flex-end",
          borderRadius: 0
        },
        swipeBtnIconContainer: {
          height: 60,
          width: 75,
          justifyContent: "center",
          alignItems: "center"
        },
        swipeBtnIcon: {
          fontSize: 30
        }
      }
    };
  },
  methods: {
    alertAdd() {
      alert("Add");
    },
    alertTrash() {
      alert("Trash");
    }
  }
};
</script>
