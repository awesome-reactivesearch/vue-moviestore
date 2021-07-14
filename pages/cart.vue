<template>
    <div>
        <app-container>           
            <template v-slot:container>
                <app-header />
                  
                 <app-content :style="{ 'min-height': 'calc(100vh - 135px)' }">
                    <template v-slot:content>
                        <Flex :class="mainCls">
                            {{items.length}}
                            <!-- <a-card class="cart-items" :title="`My Cart(${items.length})`">
                                <div v-for="(item,index) in items" :key="index">
                                    <Flex
                                        :key="item._id"
                                        :style="{ padding: 20, 'border-bottom': 'solid 1px #E8E8E8'}"
                                    >
                                        hello
                                    </Flex>
                                </div>
                            </a-card> -->
                        </Flex>
                        
                    </template>
                 </app-content>
            </template>
        </app-container>
    </div>
</template>

<script>
import { css } from '@emotion/css';
import Container from "../components/Layout/Container.vue";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Content from "../components/Layout/Content.vue";
import Flex from "../components/Flex";
import media from '../utils/media';
import PrimaryButton from '../components/Button/Primary';
import PurchaseButton from '../components/Button/Purchase';

const mainCls = css`
	.cart-items {
		width: 70%;
		margin: 20px;
	}
	.total-price {
		width: 20%;
		margin: 20px;
		max-height: 200px;
		min-width: 200px;
	}
	${media.medium(css`
		flex-direction: column;
		padding: 20px;
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

export default {
    components: {
        'app-container': Container,
        'app-content': Content,
        'app-header': Header,
        'app-footer': Footer,
        'primary-button': PrimaryButton,
        'purchase-button': PurchaseButton,
        Flex,
    },
   data() {
       return {
           mainCls,
       }
   },
   props: {
        items: Array,
        totalPrice: Number,
        removeFromCart: Function,
   }
}
</script>
