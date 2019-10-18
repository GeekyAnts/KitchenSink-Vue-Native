<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>List Avatar</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-list>
        <nb-list-item v-for="item in listItemArr" :key="item.text">
          <nb-left>
            <nb-thumbnail small :source="item.img" />
          </nb-left>
          <nb-body>
            <nb-text>
              {{ item.text }}
            </nb-text>
            <nb-text :numberOfLines="1">
              {{ item.note }}
            </nb-text>
          </nb-body>
          <nb-right>
            <nb-text note> {{ item.time }} </nb-text>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import pratik from "../../../assets/contacts/pratik.png";
import sanket from "../../../assets/contacts/sanket.png";
import megha from "../../../assets/contacts/megha.png";
import atul from "../../../assets/contacts/atul.png";
import saurabh from "../../../assets/contacts/saurabh.png";
import varun from "../../../assets/contacts/varun.png";
export default {
  data() {
    return {
      listItemArr: [
        {
          img: pratik,
          text: "Kumar Pratik",
          note: "Its time to build a difference . .",
          time: "3:43 pm"
        },
        {
          img: sanket,
          text: "Kumar Sanket",
          note: "One needs courage to be happy and smiling all time . . ",
          time: "1:12 pm"
        },
        {
          img: megha,
          text: "Megha",
          note: "Live a life style that matchs your vision",
          time: "10:03 am"
        },
        {
          img: atul,
          text: "Atul Ranjan",
          note: "Failure is temporary, giving up makes it permanent",
          time: "5:47 am"
        },
        {
          img: saurabh,
          text: "Saurabh Sahu",
          note: "The biggest risk is a missed opportunity !!",
          time: "11:11 pm"
        },
        {
          img: varun,
          text: "Varun Sahu",
          note: "Wish I had a Time machine . .",
          time: "8:54 pm"
        }
      ]
    };
  }
};
</script>
