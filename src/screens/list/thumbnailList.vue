<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.goBack()"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>List Thumbnail</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list>
                <nb-list-item
                    v-for="listItem in listItemArr"
                    :key="listItem.text"
                >
                    <nb-left>
                        <nb-thumbnail square :size="55" :source="listItem.img" />
                    </nb-left>
                    <nb-body>
                        <nb-text>
                            {{listItem.text}}
                        </nb-text>
                        <nb-text :numberOfLines="1" note>
                            {{listItem.note}}
                        </nb-text>
                    </nb-body>
                    <nb-right>
                        <nb-button transparent>
                            <nb-text>View</nb-text>
                        </nb-button>
                    </nb-right>
            </nb-list-item>
            </nb-list>
        </nb-content>
      </nb-container>
</template>


<script>
import sankhadeep from "../../../assets/contacts/sankhadeep.png";
import supriya from "../../../assets/contacts/supriya.png";
import himanshu from "../../../assets/contacts/himanshu.png";
import shweta from "../../../assets/contacts/shweta.png";
import shruti from "../../../assets/contacts/shruti.png";
import shivraj from "../../../assets/contacts/shivraj.jpg";

export default {
  data: function() {
    return {
      listItemArr: [
        {
          img: sankhadeep,
          text: "Sankhadeep",
          note: "Its time to build a difference . ."
        },
        {
          img: supriya,
          text: "Supriya",
          note: "One needs courage to be happy and smiling all time . . "
        },
        {
          img: shivraj,
          text: "Shivraj",
          note: "Time changes everything . ."
        },
        {
          img: shruti,
          text: "Shruti",
          note: "The biggest risk is a missed opportunity !!"
        },
        {
          img: himanshu,
          text: "Himanshu",
          note: "Live a life style that matchs your vision"
        },
        {
          img: shweta,
          text: "Shweta",
          note: "Failure is temporary, giving up makes it permanent"
        }
      ]
    };
  }
};
</script>


<style>
.body-icon-color {
  color: #999;
}
</style>
