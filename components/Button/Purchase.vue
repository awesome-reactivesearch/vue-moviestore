<template>
    <div @click="handleBuy">
        <slot name="purchaseButton" v-if="showSlot">
        </slot>
        <span :class="purchaseBtn"  v-bind="$attrs" v-if="!showSlot">PURCHASE</span>
    </div>    
</template>

<script>
import { css } from '@emotion/css';
import { themeConfig } from '../../utils/constants';
import PrimaryButton from "../../components/Button/Primary.vue";

const purchaseBtn = css`
	color: ${themeConfig.secondary};
	font-size: 14px;
	letter-spacing: 0.14px;
	cursor: pointer;
	margin-right: 20px;
    margin-bottom: 0px;
`;

export default {
    data() {
        return {
            purchaseBtn,
            loading: false,
        }
    },
    components: {
        'primary-button': PrimaryButton,
    },
    props: {
        price: {
            type: Number,
            default: 0,
        },
        title: String,
        showSlot: {
            type: Boolean,
            default: false,
        },
        productIds: Array,
    },
    methods: {
        handleBuy() {
            const { totalPrice } = this.$store.state;
            this.$store.commit('addProductIds',this.productIds);

            if(window?.location?.path?.includes('cart')) {
                this.$store.commit('setQuery','');
            }
            fetch('/api/checkout-api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    totalAmount: this.price || totalPrice,
                    cancelRoute: window?.location?.pathname,
                    productIds: this.productIds,
                    searchQuery: this.$store.state.searchQuery,
                })
            }).then(res =>res.json())
            .then((json) => {
                // await conversionAnalytics(searchQuery, productIds);
                window.open(json.url, '_self');
            })
            

        },

    }
}
</script>
