<template>
  <div :class="trendingCls">
    <reactive-list
      componentId="results"
      dataField="original_title"
      :size="5"
      Loader="Loading..."
      :innerClass="{
        list: 'trending-list',
        noResults: 'no-results',
        poweredBy: 'powered-by',
        pagination: 'no-results',
      }"
      :showResultStats="false"
      :pagination="true"
    >
      <div slot="renderItem" slot-scope="{ item }">
        <div class="trending-card">
          <div @click="handleProductSelect(item)">
            <img
              :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
              :alt="item.original_title"
              :style="{
                height: '360px',
              }"
            />
          </div>
        </div>
      </div>
    </reactive-list>
  </div>
</template>

<script>
import { css } from '@emotion/css';
import media from '../utils/media';

const trendingCls = css`
  .trending-card {
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    ${media.medium(css`
      margin-right: 0;
    `)}
  }
`;
export default {
  data() {
    return {
      trendingCls,
    };
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
