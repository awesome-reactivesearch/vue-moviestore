<template>
  <div>
    <client-only>
      <app-offline />
      <a-layout :class="layoutCls" class="layout">
        <reactive-base
          :appbaseConfig="{
            recordAnalytics: true,
            enableQueryRules: false,
            customEvents: {
              device: detectDevice(),
              browser: detectBrowser(),
            },
          }"
          enableAppbase
          :url="this.$config.appUrl"
          :app="this.$config.appName"
          :credentials="this.$config.appCredentials"
          :initialState="reactiveSearchStore"
          themePreset="dark"
          :theme="{
            typography: {
              fontFamily: 'Lato',
            },
            colors: {
              textColor: '#979797',
              primaryTextColor: '#fff',
              primaryColor: themeConfig.secondary,
            },
          }"
        >
          <div class="header-search-container">
            <search-box />
          </div>

          <tutorial-menu />
          <div style="margin-top: 70px">
            <slot name="container"></slot>
          </div>
        </reactive-base>
        <app-footer />
      </a-layout>
    </client-only>
  </div>
</template>

<style>
.header-search-container {
  top: 14px;
  position: fixed;
  right: 180px;
  z-index: 999;
}

@media (max-width: 600px) {
  .header-search-container {
    top: 60px;
    right: 20px;
  }
}
</style>
<script>
import { css } from '@emotion/css';
import { themeConfig, appBaseConfig } from '../../utils/constants';
import Footer from './Footer.vue';
import TutorialMenu from '../TutorialMenu.vue';
import SearchBox from '../SearchBox';
import Offline from '../Offline';

const layoutCls = css`
  background: ${themeConfig.primary};
  color: #fff;
  height: 100vh;
  font-family: Lato;
  .footerCls {
    text-align: center;
    background: #04070b;
    color: #fff;
    padding: 24px 50px;
    position: relative;
    font-size: 14px;
  }
`;

export default {
  name: 'Container',
  components: {
    'tutorial-menu': TutorialMenu,
    'app-footer': Footer,
    'search-box': SearchBox,
    'app-offline': Offline,
  },

  data() {
    return {
      layoutCls,
      appBaseConfig,
      themeConfig,
    };
  },
  head() {
    return {
      title: 'Movies Store',
    };
  },
  props: {
    title: {
      type: String,
      default: function () {
        return 'Movies Store';
      },
    },
    reactiveSearchStore: Object,
    updateRoute: Function,
  },
  methods: {
    detectBrowser() {
      let browser;

      if (this.$browserDetect?.isChrome) {
        browser = 'Chrome';
      } else if (this.$browserDetect?.isChromeIOS) {
        browser = 'Chrome IOS';
      } else if (this.$browserDetect?.isEdge) {
        browser = 'Edge';
      } else if (this.$browserDetect?.isFirefox) {
        browser = 'Firefox';
      } else if (this.$browserDetect?.isIE) {
        browser = 'Internet Explorer';
      } else if (this.$browserDetect?.isIOS) {
        browser = 'IOS';
      } else if (this.$browserDetect?.isOpera) {
        browser = 'Opera';
      } else if (this.$browserDetect?.isSafari) {
        browser = 'Safari';
      } else {
        browser = 'Unknown';
      }

      return browser;
    },
    detectDevice() {
      let device;

      if (this.$device?.isMobile) {
        device = 'Mobile';
      } else if (this.$device?.isTablet) {
        device = 'Tablet';
      } else if (this.$device?.isDesktop) {
        device = 'Desktop';
      } else {
        device = 'Unknown';
      }

      return device;
    },
  },
};
</script>
