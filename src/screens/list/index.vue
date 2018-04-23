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
            <nb-title>List</nb-title>
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
          route: "NHBasicList",
          text: "Basic List"
        },
        {
          route: "NHListItemSelected",
          text: "ListItem Selected"
        },
        {
          route: "NHListDivider",
          text: "List Divider"
        },
        {
          route: "NHListHeader",
          text: "List Header"
        },
        {
          route: "NHListIcon",
          text: "List Icon"
        },
        {
          route: "NHListAvatar",
          text: "List Avatar"
        },
        {
          route: "NHListThumbnail",
          text: "List Thumbnail"
        },
        {
          route: "NHListSeparator",
          text: "List Separator"
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
