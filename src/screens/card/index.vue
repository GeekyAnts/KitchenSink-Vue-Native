<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('DrawerOpen')"
            >
              <nb-icon name="menu" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>Card</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list>
                <nb-list-item
                    v-for="listItem in listItemArr"
                    :key="listItem.route"
                    button
                    :onPress="() => this.props.navigation.navigate(listItem.route)"
                >
                    <nb-left>
                        <nb-text>
                            {{listItem.text}}
                        </nb-text>
                    </nb-left>
                    <nb-right>
                        <nb-icon name="arrow-forward" class="body-icon-color" />
                    </nb-right>
            </nb-list-item>
            </nb-list>
        </nb-content>
      </nb-container>
</template>


<script>
export default {
  data: function() {
    return {
      listItemArr: [
        {
          route: "BasicCard",
          text: "Basic Card"
        },
        {
          route: "NHCardHeaderAndFooter",
          text: "Card Header & Footer"
        },
        {
          route: "NHCardItemBordered",
          text: "Bordered CardItem"
        },
        {
          route: "NHCardTransparent",
          text: "Transparent Card"
        },
        {
          route: "NHCardItemButton",
          text: "Button CardItem"
        },
        {
          route: "NHCardList",
          text: "Card List"
        },
        {
          route: "NHCardImage",
          text: "Card Image"
        },
        {
          route: "NHCardShowcase",
          text: "Card Showcase"
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
