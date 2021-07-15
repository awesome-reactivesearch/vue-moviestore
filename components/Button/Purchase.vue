<template>
    <div>
         <!-- <StripeElementCard
            ref="checkoutRef"
            pk="pk_test_51JD79xSBwW0EiKyrvFqggBXyFqc9GeOOqVGnVab06kGxqb8OvaqCApmVNVhpp9kM1rlQLUFgAYNvevP92ByDQJOw00ZB2rchyp"
            amount="400"
            @token="tokenCreated"
            @loading="loading = $event"
        /> -->
        <!-- <slot name="purchaseButton"></slot> -->
        <!-- <button @click="handleBuy">Purchase</button> -->
        <!-- <primary-button
            @click="handleBuy"
            class="purchase-button"
        >
        <template v-slot:primaryButton> Purchase</template>                                         
        </primary-button> -->
    </div>    
    <!-- <span :class="button" v-bind="$attrs">
		PURCHASE
   </span> -->
</template>

<script>
import { css } from '@emotion/css';
import { themeConfig } from '../../utils/constants';
import PrimaryButton from "../../components/Button/Primary.vue";

const button = css`
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
            button,
            loading: false,
        }
    },
    components: {
        'primary-button': PrimaryButton,
    },
    props: {
        price: Number,
        title: String,
    },
    methods: {
        async handleBuy() {
            // console.log(this.$stripe);
            // const card = await this.$stripe.elements();

            // await card.create('card');

            // const cardElement = await card.getElement('card');

            // const data = await this.$stripe.createPaymentMethod({
            //     type: 'card',
            //     card: cardElement
            // });

            const data = await this.$stripe.paymentRequest({
                total: {
                    amount: 400,
                    label: 'demo'
                },
                country: 'US',
                currency: 'usd'
            });


            await data.canMakePayment();
            await data.show();
            // this.$checkout.open({
            //         image: 'https://i.imgur.com/1PHlmFF.jpg',
            //         locale: 'en',
            //         currency: 'BZD',
            //         name: 'Blips and Chitz!',
            //         description: 'An entire afternoon at Blips and Chitz!',
            //         amount: 9999999,
            //         panelLabel: 'Play Roy for {{amount}}',
            //         token: (token) => {
            //                 // handle the token
            //         }
            // })
            // console.log(this.$refs);
            //  this.$refs.checkoutRef.submit();
        },

    }
}
</script>
