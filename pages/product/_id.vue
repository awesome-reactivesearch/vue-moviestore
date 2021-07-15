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
                            <Flex>
							    <img :alt="productData.title" :src="`https://image.tmdb.org/t/p/w500/${productData.poster_path}`" />
						    </Flex>
                            <Flex :class="contentCls" flexDirection="column">
                                <h2>{{ productData.title }}</h2>
                                <br/>
                                <h3>{{ getGenresTag(productData.release_year, productData.genres_data) }}</h3>
                                <Star :rating="productData.vote_average" />
                                <div class="overview">{{productData.overview}}</div>
							    <div class="price">${{productData.price}}</div>
                                <watch-trailer
                                    v-if="productData.title"
								    :href="`https://www.youtube.com/results?search_query=${productData.title.replace(/ /g,'+',)}+trailer`"
                                />

                                <Flex class="action">
                                    <purchase-button :price="productData.price">
                                        <!-- <template v-slot:purchaseButton>
                                            
                                        </template>  -->
                                    </purchase-button>
                                    <a-button class="cart-button" @click="handleBuy(productData)"> 
                                        ADD TO CART
                                    </a-button>
                                </Flex>
                            </Flex>                          
                        </Flex>
                    </template>
                 </app-content>
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
	height: 76vh;
	overflow-y: scroll;
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
           productData: this.$store?.state?.selectedProduct || { genresData: [], title: '' }
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
    props: {
        handleAddToCart: Function,
        product: Object,
        productImage: [ String, Number ],
        title: String,
        lastPage: String,
        price: [ String, Number ],
        releaseYear: [ String, Number ],
        genresData: [ String, Number ],
        voteAverage: Number,
        overview: String,
    } 
}
</script>
