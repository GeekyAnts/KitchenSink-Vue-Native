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
            <nb-title>List Separator</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-separator bordered>
                <nb-text>MIDFIELD</nb-text>
            </nb-separator>
            <nb-list-item>
                <nb-text>Caroline Aaron</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Urbino Cendre</nb-text>
            </nb-list-item>
            <nb-list-item last>
                <nb-text>Lee Allen</nb-text>
            </nb-list-item>

            <nb-separator bordered>
                <nb-text>MIDFIELD</nb-text>
            </nb-separator>
            <nb-list-item>
                <nb-text>Caroline Aaron</nb-text>
            </nb-list-item>
            <nb-list-item>
                <nb-text>Urbino Cendre</nb-text>
            </nb-list-item>
            <nb-list-item last>
                <nb-text>Lee Allen</nb-text>
            </nb-list-item>        
        </nb-content>
    </nb-container>
</template>


