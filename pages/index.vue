<template>
  <div>
    <app-container>
      <template #container>
        <app-header />
        <div :class="contentCls">
          <app-content>
            <template #content>
              <Flex :class="mainCls" justifyContent="space-between">
                <Flex
                  class="content"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <div class="title">
                    {{ bannerConfig._source.original_title }}
                  </div>
                  <div class="subtitle">
                    2008 |
                    {{
                      bannerConfig._source.genres_data
                        .toString()
                        .replace(/,/g, ', ')
                    }}
                  </div>
                  <div class="overview">
                    {{ bannerConfig._source.overview }}
                  </div>
                  <div class="price">${{ bannerConfig._source.price }}</div>
                  <div class="action">
                    <purchase-button
                      :price="bannerConfig._source.price"
                      :productIds="[`${bannerConfig._source.id}`]"
                    />
                    <watch-trailer
                      href="https://www.youtube.com/watch?v=EXeTwQWrcwY"
                    />
                  </div>
                </Flex>
                <div @click="handleProductSelect(bannerConfig._source)">
                  <img
                    :src="`https://image.tmdb.org/t/p/w500${bannerConfig._source.poster_path}`"
                    :alt="bannerConfig._source.original_title"
                    rel="preload"
                  />
                </div>
              </Flex>

              <Flex
                flexDirection="column"
                :class="listCls"
                :style="{ width: '100%', 'margin-top': '50px' }"
              >
                <H2>Trending Now</H2>
                <Flex>
                  <trending-list />
                </Flex>
              </Flex>
            </template>
          </app-content>
          <div :class="footerCls">
            Appbase.io ©{{ new Date().getFullYear() }} created by Appbase Inc.
          </div>
        </div>
      </template>
    </app-container>
  </div>
</template>

<script>
import { css } from '@emotion/css';
import Container from '../components/Layout/Container.vue';
import Header from '../components/Layout/Header/index.vue';
import Content from '../components/Layout/Content.vue';
import { themeConfig, bannerConfig, appBaseConfig } from '../utils/constants';
import PurchaseButton from '../components/Button/Purchase.vue';
import WatchTrailer from '../components/Button/WatchTrailer.vue';
import TrendingList from '../components/TrendingList.vue';
import Flex from '../components/Flex';
import { H2 } from '../components/Typography';
import media from '../utils/media';
import { conversionAnalytics } from '../utils/analytics';

const listCls = css`
  background: ${themeConfig.secondaryBg};
  padding: 50px 50px;
  .trending-list {
    margin-top: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }
  .no-results {
    display: none;
  }
  .powered-by {
    display: none;
  }
  .trending-card {
    margin-right: 20px;
    margin-bottom: 20px;
    ${media.medium(css`
      margin-right: 0;
    `)}
  }
`;

const mainCls = css`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  color: #fff;
  .title {
    color: #ffffff;
    font-size: 85px;
    font-weight: bold;
    max-width: 480px;
    line-height: 1;
  }
  .subtitle {
    color: #ffffff;
    font-size: 14px;
    margin-top: 20px;
    line-height: 18px;
  }
  .price {
    color: #ffffff;
    font-size: 28px;
    margin-top: 10px;
  }
  .overview {
    color: #ffffff;
    max-width: 427px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
  }
  .action {
    display: flex;
    margin-top: 20px;
  }
  img {
    height: 500px;
    cursor: pointer;
  }
  ${media.large(css`
    padding: 20px;
  `)};
  ${media.medium(css`
    flex-direction: column-reverse !important;
    padding: 20px;
    margin-top: 0;
    img {
      width: 100%;
      height: auto;
    }
    .content {
      margin-top: 20px;
    }
    .title {
      font-size: 60px;
    }
  `)};
`;

const footerCls = css`
  text-align: center;
  background: #04070b;
  color: #fff;
  padding: 24px 50px;
  font-size: 14px;
  ${media.medium(css`
    margin-bottom: 60px;
    padding: 17px 50px;
  `)};
`;

const contentCls = css`
  height: 84vh;
  overflow-y: scroll;
`;

export default {
  components: {
    'app-container': Container,
    'app-content': Content,
    'app-header': Header,
    'purchase-button': PurchaseButton,
    'watch-trailer': WatchTrailer,
    'trending-list': TrendingList,
    Flex,
    H2,
  },
  data() {
    return {
      bannerConfig,
      appBaseConfig,
      mainCls,
      listCls,
      footerCls,
      contentCls,
    };
  },
  mounted() {
    if (window?.location?.search.includes('is_stripe')) {
      conversionAnalytics(
        this.$store.state.searchQuery,
        this.$store.state.productIds
      );
      this.$store.commit('setProductIds', []);
      this.$store.commit('setQuery', '');
      this.$router.push({ path: '/', query: {} });
    }
  },

  async created() {
    if (window?.location?.hash.indexOf('access_token') !== -1) {
      window.history.pushState({}, document.title, window.location.pathname);
      window.location.reload();
    }
  },

  methods: {
    handleProductSelect(product) {
      this.$store.commit('setRecentRoute', '/');
      this.$store.commit('setSelectedProduct', product);
      this.$router.push(`/product/${product.id}`);
    },
  },
};
</script>
