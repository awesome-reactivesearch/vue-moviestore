<template>
  <div>
    <a-layout-footer :class="footerPosition">
      <div :class="MarketplaceFooter">
        <p style="margin: 0px">
          This app is part of the ReactiveSearch Marketplace. You can check more
          apps
          <a href="https://www.reactiveapps.io/" :style="{ color: 'white' }"
            >here</a
          >.
        </p>
        <button class="marketplaceButton" @click="handlePurchaseClick">
          Buy Now for $49
        </button>
      </div>
    </a-layout-footer>
  </div>
</template>

<script>
import { css } from '@emotion/css';
import media from '../../utils/media';

const MarketplaceFooter = css`
  font-family: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #2f1b5e;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  bottom: 0;
  position: relative;
  box-shadow: 0 -2px 8px rgb(0 0 0 / 30%);
  color: #fff;
  font-size: 16px;
  z-index: 20;

  .marketplaceButton {
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    background: white;
    outline: none;
    color: #262626;
    border: 0;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    transition: all ease 0.2s;
  }
  ${media.medium(css`
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    .marketplaceButton {
      padding: 5px 10px;
      font-size: 14px;
      margin-top: 10px;
    }
  `)};
`;

const footerPosition = css`
  padding: 0px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
`;
export default {
  data() {
    return {
      MarketplaceFooter,
      footerPosition,
    };
  },
  methods: {
    handlePurchaseClick() {
      window.open('https://appbaseio.gumroad.com/l/movieappbase', '_blank');
    },
  },
};
</script>
