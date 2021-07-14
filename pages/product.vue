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
                            <Flex :class="contentCls" flexDirection="column">
                                <h2>{{ title }}</h2>
                            </Flex>
                            <!-- <Flex css={contentCls} flexDirection="column">
                                <h2>{title}</h2>
                                <br />
                                <h3>{getGenresTag(releaseYear, genresData)}</h3>
                                <Star rating={voteAverage} />
                                <div className="overview">{overview}</div>
                                <div className="price">{`$${price}`}</div>
                                <WatchTrailer
                                    href={`https://www.youtube.com/results?search_query=${title.replace(
                                        / /g,
                                        '+',
                                    )}+trailer`}
                                />
                                <Flex className="action">
                                    <PurchaseButton price={price}>
                                        <PrimaryButton
                                            onClick={this.handleBuy}
                                            className="purchase-button"
                                        >
                                            Purchase
                                        </PrimaryButton>
                                    </PurchaseButton>
                                    <Button className="cart-button" onClick={this.handleBuy}>
                                        ADD TO CART
                                    </Button>
                                </Flex>
                            </Flex> -->
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
import Star from "../components/Star.vue";
import media from '../utils/media';

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
    // routes: {
    //     extendRoutes(routes, resolve) {
    //       routes.push({
    //           path: '/product/:id',
    //           components: {
    //               default: resolve(__dirname, 'pages/product')
    //           }
    //       })  
    //     }
    // },
    components: {
        'app-container': Container,
        'app-content': Content,
        'app-header': Header,
        'app-footer': Footer,
        Flex,
        Star
    },
   data() {
       return {
           contentCls,
           mainCls,
           mainContentCls,
       }
   },
   methods: {
       getGenresTag(releaseYear, genresData) {
           if (genresData.length) {
                return `${releaseYear}  |  ${genresData.toString().replace(/,/g, ', ')}`;
            }
            return releaseYear;
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
