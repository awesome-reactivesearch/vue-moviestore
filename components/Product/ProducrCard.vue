<template>
    <div :class="mainCls" key="id">
        <Flex class="result-card-content">
			<div @click="handleProductSelect(product)">
			<!-- <nuxt-link
				:to="{
					path: 'product',
					query: { id, payload: JSON.stringify(product) },
				}"
				:as="`/product/${id}`"
			>             -->
				<product-image

					:placeholderStyle="{
						width: '240px',
						height: '360px',
					}"
					:src="`https://image.tmdb.org/t/p/w500${posterPath}`"
					alt="originalTitle"
				/>
			<!-- </nuxt-link> -->
			</div>
			<Flex
				justifyContent="space-between"
				class="content"
				flexDirection="column"
			>
				<div>

					<h2>{{originalTitle}}</h2>
					<h3> {{releaseYear}} |  {{ genresData.toString().replace(/,/g, ', ')}} </h3>
					<div class="overview">
                        <p  v-snip="4">{{ overview }}</p>
					</div>
					<Star :rating="voteAverage" />
				</div>
				<Flex justifyContent="space-between">
					<h2>${{price}}</h2>
					<puchase-button :title="originalTitle" :price="price" /> 
				</Flex>
			</Flex>
		</Flex>
		<div class="hover-icon" @click="handleProductSelect(product)">
			<!-- <nuxt-link
				:to="{
					path: '/product',
					query: { id, payload: JSON.stringify(product) },
				}"
				:as="`/product/${id}`"
			> -->
				<img alt="dropdown" src="/images/icon-down.png" />
			<!-- </nuxt-link> -->
		</div>

    </div>
</template>

<script>
import { css } from '@emotion/css';
import media from '../../utils/media';
import Flex from '../Flex';
import AppImage from '../CustomImage';
import PuchaseButton from "../Button/Purchase.vue";

const mainCls = css`
	height: 360px;
	position: relative;
	color: #fff;
	width: 500px;
	background-color: #050304;
	margin-right: 20px;
	margin-bottom: 20px;
	img {
		height: 360px;
		cursor: pointer;
	}
	.content {
		transition: all 0.5s;
		position: relative;
		width: 100%;
		padding: 30px 20px;
		h2 {
			font-size: 18px;
			color: #fff;
		}
		h3 {
			color: #fff;
			font-size: 12px;
		}
		.overview {
			font-size: 12px;
			font-weight: 300;
			line-height: 18px;
			color: #9f9e9e;
			margin-top: 20px;
		}
	}
	.hover-icon {
		color: #ff0047;
		position: absolute;
		transition: all 0.5s;
		text-align: center;
		display: none;
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0.8);
		padding: 5px;
        z-index: 99;
		img {
			width: 100px;
			height: 20px;
			cursor: pointer;
		}
	}
	&:hover {
		.hover-icon {
			display: block;
		}
	}
	${media.medium(css`
		.result-card-content {
			flex-direction: column;
		}
		height: auto;
		width: 100%;
		margin-right: 0;
		img {
			max-width: 300px;
			margin-top: 20px;
			align-self: center;
		}
	`)}
`;

export default {
    name: "ProductCard",
    props: {
        id: Number,
        originalTitle: String,
        genresData: [ Array, String ],
        voteAverage: Number,
        releaseYear: Number,
        posterPath: String,
        overview: String,
        price: Number,
        product: Object
    },
    data() {
        return {
            mainCls,
        }
    },
    components: {
        Flex,
        'product-image': AppImage,
        'puchase-button': PuchaseButton,
    },
	methods: {
		handleProductSelect(product) {
			this.$store.state.recentRoute = '/search';
			this.$store.commit('setSelectedProduct', product);
			this.$router.push(`/product/${product.id}`);
		}
	}
}
</script>
