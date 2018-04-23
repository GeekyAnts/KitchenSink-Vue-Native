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
            <nb-title>Basic List</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list>
                <nb-list-item v-for="item in listItemArr" :key="item">
                    <nb-left>
                        <nb-text>
                            {{item}}
                        </nb-text>
                    </nb-left>
                    <nb-right>
                        <nb-icon name="arrow-forward"></nb-icon>
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
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Alberto Moreno",
        "Emre Can",
        "Joe Allen",
        "Phil Coutinho"
      ]
    };
  }
};
</script>
