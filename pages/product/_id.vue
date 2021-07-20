<template>
    <div>
        <app-container>           
            <template v-slot:container>
                <app-header />
                  
                 <app-content :class="mainContentCls">
                    <template v-slot:content>
                        <div v-if="lastPage">
                            <nuxt-link :to="lastPage">
                                <div class="back-to-results">
                                    <a-icon type="arrow-left" />
                                    Go Back
                                </div>
                            </nuxt-link>
                        </div>
                        <Flex :class="mainCls">
                            <Flex v-if="productData.poster_path">
							    <img :alt="productData.title" :src="`https://image.tmdb.org/t/p/w500/${productData.poster_path}`" />
						    </Flex>
                            <Flex :class="contentCls" flexDirection="column">
                                <h2>{{ productData.title }}</h2>
                                <br/>
                                <h3>{{ getGenresTag(productData.release_year, productData.genres_data) }}</h3>
                                <Star v-if="productData.vote_average" :rating="productData.vote_average" />
                                <div class="overview">{{productData.overview}}</div>
							    <div class="price">${{productData.price}}</div>
                                <watch-trailer
                                    v-if="productData.title"
								    :href="`https://www.youtube.com/results?search_query=${productData.title.replace(/ /g,'+',)}+trailer`"
                                />

                                <Flex class="action">
                                    <purchase-button :price="productData.price" :showSlot="true">
                                        <template v-slot:purchaseButton>
                                            <primary-button class="purchase-button">
                                                <template v-slot:primaryButton>
                                                    PURCHASE
                                                </template>
                                            </primary-button>
                                        </template> 
                                    </purchase-button>
                                    <a-button class="cart-button" @click="handleBuy(productData)"> 
                                        ADD TO CART
                                    </a-button>
                                </Flex>
                            </Flex>                          
                        </Flex>
                    </template>
                    
                 </app-content>
                 
                <div :class="footerCls">
                    Appbase.io ©{{ new Date().getFullYear() }} created by Appbase Inc.
                </div> 

                <app-footer />
            </template>
        </app-container>
    </div>
</template>

<script>
import { css } from '@emotion/css';
import Container from "../../components/Layout/Container.vue";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Content from "../../components/Layout/Content.vue";
import Flex from "../../components/Flex";
import Star from "../../components/Star.vue";
import WatchTrailer from "../../components/Button/WatchTrailer.vue";
import PurchaseButton from "../../components/Button/Purchase.vue";
import PrimaryButton from "../../components/Button/Primary.vue";
import media from '../../utils/media';

// Page, PuchaseButton,WatchTrailer,PrimaryButton, { fetchProduct, addToCart } from '../modules/actions';

const contentCls = css`
	padding: 50px;
	h2 {
		color: #ffffff;
		font-size: 40px;
		line-height: 42px;
	}
	h3 {
		color: #ffffff;
		font-size: 18px;
		line-height: 18px;
	}
	.overview {
		color: #6e6d6d;
		font-size: 16px;
		font-weight: 300;
		line-height: 20px;
		margin-top: 10px;
	}
	.price {
		color: #ffffff;
		font-size: 32px;
		line-height: 40px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.action {
		margin-top: 30px;
	}
	.purchase-button {
		margin-right: 20px;
	}
	.cart-button {
		font-size: 14px;
		letter-spacing: 0.14px;
		line-height: 13px;
		text-transform: uppercase;
	}
`;

const mainCls = css`
	background-color: #050304;
	img {
		height: 539px;
	}
	${media.medium(css`
		flex-direction: column;
		img {
			max-height: 360px;
			margin: 0 auto;
		}
	`)}
`;

const mainContentCls = css`
	padding: 50px;
	height: 84vh;
	max-width: 1000px;
	margin: 0 auto;
	${media.medium(css`
		padding: 20px;
	`)}
	.back-to-results {
		cursor: pointer;
		background: transparent;
		color: #fff;
		margin-bottom: 10px;
		border: none;
		padding: 0;
		font-size: 16px;
	}
`;

const footerCls = css`
    text-align: center;
    background: #04070b;
    color: #fff;
    padding: 24px 50px;  
    margin-bottom: 60px;
`

export default {
    components: {
        'app-container': Container,
        'app-content': Content,
        'app-header': Header,
        'app-footer': Footer,
        'watch-trailer': WatchTrailer,
        'purchase-button': PurchaseButton,
        'primary-button': PrimaryButton,
        Flex,
        Star
    },
   data() {

       return {
           contentCls,
           mainCls,
           mainContentCls,
           footerCls,
           productData: this.$store?.state?.selectedProduct ? JSON.parse(JSON.stringify(this.$store?.state?.selectedProduct)) : { genresData: [], title: '', vote_average: 0.0, overview: '' },
           lastPage: this.$store?.state.recentRoute || '/',
       }
   },
   methods: {
       getGenresTag(releaseYear, genresData) {
           if (genresData?.length) {
                return `${releaseYear}  | ${genresData?.toString()?.replace(/,/g, ', ')}`;
            }
            return releaseYear;
        },
        handleBuy(product) {
            this.$store.commit("addToCart",product);
        }
    },
}
</script>
