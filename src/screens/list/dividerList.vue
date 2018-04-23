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
            <nb-title>List Divider</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list-item itemDivider>
                <nb-text>A</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Aaron Bennet</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Ali Connors</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Allen Lee</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Andy Hertzfeld</nb-text>
            </nb-list-item>
            <nb-list-item last>
                <nb-text>Angana Ghosh</nb-text>
            </nb-list-item>

            <nb-list-item itemDivider>
                <nb-text>B</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Bradley Horowitz</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Brian Swetland</nb-text>
            </nb-list-item>
            <nb-list-item last>
                <nb-text>Brittany Kelso</nb-text>
            </nb-list-item>

            <nb-list-item itemDivider>
                <nb-text>C</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Caroline Aaron</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Cendre Urbino</nb-text>
            </nb-list-item>
            <nb-list-item last>
                <nb-text>Claire Barclay</nb-text>
            </nb-list-item>
        </nb-content>
    </nb-container>
</template>


