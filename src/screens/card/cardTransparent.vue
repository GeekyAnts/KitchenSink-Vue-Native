<template>
  <nb-container :style="{backgroundColor: '#fff'}">
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
            <nb-title>Transparent Card</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>

        <nb-content padder>
            <nb-card :style="{marginBottom: 15}" transparent>
                <nb-card-item>
                    <nb-body>
                        <nb-text>This is just a transparent card with some text to boot.</nb-text>
                    </nb-body>            
                </nb-card-item>
            </nb-card>
        </nb-content>
      </nb-container>
</template>