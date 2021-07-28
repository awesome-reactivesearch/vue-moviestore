<template>
  <div>
    <app-container>
      <template #container>
        <app-header />

        <app-content :class="contentCls">
          <template #content>
            <Flex :class="mainCls">
              <a-card
                class="cart-items"
                :title="`My Cart(${$store.state.cartCount || 0})`"
              >
                <div v-for="(item, index) in cartItems" :key="index">
                  <Flex
                    :key="item.id"
                    :style="{
                      padding: '20px',
                      'border-bottom': 'solid 1px #E8E8E8',
                    }"
                  >
                    <img
                      :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                      :alt="item.original_title"
                      class="img-position"
                      @click="handleProductSelect(item)"
                    />
                    <Flex
                      :style="{ 'margin-left': '20px' }"
                      flexDirection="column"
                    >
                      <h2>{{ item.original_title }}</h2>
                      <h2>$ {{ item.price }}</h2>
                      <a-button
                        class="btn-position"
                        type="danger"
                        @click="removeFromCart(item, index)"
                      >
                        Remove
                      </a-button>
                    </Flex>
                  </Flex>
                </div>
              </a-card>
              <a-card class="total-price" title="Total Price">
                <a-card-meta>
                  <a-button>Checkout</a-button>
                </a-card-meta>
                <Flex justifyContent="space-between">
                  <h2>Total:</h2>
                  <h2>${{ $store.state.totalPrice || 0 }}</h2>
                </Flex>

                <purchase-button
                  :price="$store.state.totalPrice"
                  :showSlot="true"
                  :productIds="Object.keys($store.state.cartValues)"
                >
                  <template #purchaseButton>
                    <primary-button
                      class="primary-btn-container"
                      :isCheckout="true"
                    >
                      <template #primaryButton> Checkout </template>
                    </primary-button>
                  </template>
                </purchase-button>
              </a-card>
            </Flex>
            <div id="app-footer-container" :class="footerCls">
              Appbase.io ©{{ new Date().getFullYear() }} created by Appbase Inc.
            </div>
          </template>
        </app-content>
      </template>
    </app-container>
  </div>
</template>

<script>
import { css } from '@emotion/css';
import Container from '../components/Layout/Container.vue';
import Header from '../components/Layout/Header/index.vue';
import Content from '../components/Layout/Content.vue';
import Flex from '../components/Flex';
import media from '../utils/media';
import PrimaryButton from '../components/Button/Primary.vue';
import PurchaseButton from '../components/Button/Purchase.vue';

const footerCls = css`
  text-align: center;
  background: #04070b;
  color: #fff;
  padding: 24px 50px;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  z-index: 1;
  ${media.medium(css`
    margin-bottom: 50px;
    padding: 17px 50px;
  `)};
`;

const mainCls = css`
  margin-bottom: 60px;
  .cart-items {
    width: 70%;
    margin: 20px;
  }
  .img-position {
    height: 150px;
    align-self: flex-start;
    cursor: pointer;
  }
  .btn-position {
    margin-top: 30px;
    width: 100px;
  }
  .primary-btn-container {
    width: 100%;
    margin-top: 20px;
  }
  .total-price {
    width: 20%;
    margin: 20px;
    max-height: 200px;
    min-width: 200px;
  }
  ${media.medium(css`
    flex-direction: column !important;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 100px;
    .cart-items {
      width: 100%;
      margin: 0;
    }
    .total-price {
      width: 100%;
      margin: 0;
      max-height: auto;
      min-width: auto;
      margin-top: 20px;
    }
  `)}
`;

const contentCls = css`
  height: calc(100vh - 134px);
  overflow: auto;
`;

export default {
  components: {
    'app-container': Container,
    'app-content': Content,
    'app-header': Header,
    'primary-button': PrimaryButton,
    'purchase-button': PurchaseButton,
    Flex,
  },
  data() {
    return {
      mainCls,
      footerCls,
      contentCls,
      cartItems: this.$store.state.cartItems || [],
    };
  },
  methods: {
    handleProductSelect(product) {
      this.$store.commit('setRecentRoute', '/cart');
      this.$store.commit('setSelectedProduct', product);
      this.$router.push(`/product/${product.id}`);
    },
    removeFromCart(product, index) {
      this.$store.commit('removeFromCart', { product, index });
    },
  },
  preload: false,
};
</script>
