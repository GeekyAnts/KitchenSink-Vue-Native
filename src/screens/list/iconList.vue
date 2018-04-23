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
            <nb-title>List Icon</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-separator bordered noTopBorder />
            <nb-list-item icon>
                <nb-left>
                    <nb-button :style="{ backgroundColor: '#FF9501' }">
                        <nb-icon active name="plane" />
                    </nb-button>
                </nb-left>
                <nb-body>
                    <nb-text>Airplane Mode</nb-Text>
                </nb-body>
                <nb-right>
                    <nb-switch :value="false" onTintColor="#50B948" />
                </nb-right>
            </nb-list-item>
            <nb-list-item icon>
                <nb-left>
                    <nb-button :style="{ backgroundColor: '#007AFF' }">
                        <nb-icon active name="wifi" />
                    </nb-button>
                </nb-left>
                <nb-body>
                    <nb-text>Wi-Fi</nb-text>
                </nb-body>
                <nb-right>
                    <nb-text>GeekyAnts</nb-text>
                    <nb-icon active name="arrow-forward" v-if="osType==='ios'" />
                </nb-right>
            </nb-list-item>
            <nb-list-item icon>
                <nb-left>
                    <nb-button :style="{ backgroundColor: '#007AFF' }">
                        <nb-icon active name="bluetooth" />
                    </nb-button>
                </nb-left>
                <nb-body>
                    <nb-text>Bluetooth</nb-text>
                </nb-body>
                <nb-right>
                    <nb-text>On</nb-text>
                    <nb-icon active name="arrow-forward" v-if="osType==='ios'" />
                </nb-right>
            </nb-list-item>
            <nb-list-item icon>
                <nb-left>
                    <nb-button :style="{ backgroundColor: '#4CDA64' }">
                        <nb-icon active name="phone-portrait" />
                    </nb-button>
                </nb-left>
                <nb-body>
                    <nb-text>Mobile Data</nb-text>
                </nb-body>
                <nb-right>
                    <nb-radio selected />
                </nb-right>
            </nb-list-item>
            <nb-list-item icon last>
                <nb-left>
                    <nb-button :style="{ backgroundColor: '#4CDA64' }">
                        <nb-icon active name="link" />
                    </nb-button>
                </nb-left>
                <nb-body>
                    <nb-text>Personal Hotspot</nb-text>
                </nb-body>
                <nb-right>
                    <nb-text>Off</nb-text>
                    <nb-icon active name="arrow-forward" v-if="osType==='ios'" />
                </nb-right>
            </nb-list-item>

            <nb-separator bordered />

            <nb-list-item icon>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#FD3C2D' }">
                <nb-icon active name="notifications" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Notifications</nb-Text>
            </nb-body>
            <nb-right>
              <nb-icon active name="arrow-forward" v-if="osType==='ios'"/>
            </nb-right>
          </nb-list-item>
          <nb-list-item icon>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#8F8E93' }">
                <nb-icon active name="switch" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Control Center</nb-text>
            </nb-body>
            <nb-right>
              <nb-icon active name="arrow-forward" v-if="osType==='ios'"/>
            </nb-right>
          </nb-list-item>
          <nb-list-item icon last>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#5855D6' }">
                <nb-icon active name="moon" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Do Not Disturb</nb-text>
            </nb-body>
            <nb-right>
              <nb-text>Yes</nb-text>
            </nb-right>
          </nb-list-item>
          <nb-separator bordered />
          <nb-list-item icon>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#4CDA64' }">
                <nb-icon name="arrow-dropdown" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Pick SIM</nb-text>
            </nb-body>
            <nb-right>
              <nb-picker
                note
                iosHeader="Select Your Sim"
                :iosIcon="getIosIconForPicker()"
                mode="dropdown"
                :selectedValue="selected1"
                :onValueChange="onValueChange"
              >
                <nb-item label="TATA" value="key0" />
                <nb-item label="AIRTEL" value="key1" />
              </nb-picker>
            </nb-right>
          </nb-list-item>
          <nb-list-item icon>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#8F8E93' }">
                <nb-icon active name="cog" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Software Update</nb-text>
            </nb-body>
            <nb-right>
              <nb-badge :style="{ backgroundColor: '#FD3C2D' }">
                <nb-text>2</nb-text>
              </nb-badge>
            </nb-right>
          </nb-list-item>
          <nb-list-item last icon>
            <nb-left>
              <nb-button :style="{ backgroundColor: '#007AFF' }">
                <nb-icon active name="hand" />
              </nb-button>
            </nb-left>
            <nb-body>
              <nb-text>Privacy</nb-text>
            </nb-body>
            <nb-right>
              <nb-icon active name="arrow-forward" v-if="osType==='ios'" />
            </nb-right>
          </nb-list-item>

        </nb-content>
    </nb-container>
</template>


<script>
import React from "react";
import { Platform } from "react-native";
import { Icon } from "native-base";
export default {
  data: function() {
    return {
      osType: Platform.OS,
      selected1: "key1"
    };
  },
  methods: {
    onValueChange: function(value) {
      this.selected1 = value;
    },
    getIosIconForPicker: function() {
      return <Icon name="ios-arrow-down-outline" />;
    }
  }
};
</script>
