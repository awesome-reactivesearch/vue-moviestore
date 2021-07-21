<template>
    <div>
		<data-search
			:className="dataSearchCls(isSearchPage())"
			componentId="SearchSensor"
			:dataField="[
				'original_title',
				'original_title.autosuggest',
				'original_title.keyword',
				'original_title.search',
				'overview',
				'overview.autosuggest',
				'overview.keyword',
				'overview.search',
			]"
			ref="data-search"
			:fieldWeights="[10, 4, 10, 4, 2, 1, 2, 1]"
			:fuzziness="1"
			:autosuggest="!isSearchPage()"
			:enablePredictiveSuggestions="!isSearchPage()"
			:enableRecentSearches="true"
			filterLabel="search"
			placeholder="Search for movies"
			queryFormat="and"
			:showClear="false"
			:theme="{
				typography: {
					fontFamily: 'Lato',
				},
				colors: {
					textColor: '#979797',
					primaryTextColor: '#fff',
					primaryColor: 'red',
				},
			}"
			:URLParams="isSearchPage()"
			@keyDown="handleKeyPress"
			@valueSelected="handleSuggestion"
			innerRef="input"
		/>
    </div>
</template>

<style>
	.search-container > div:first-child  {
		width: 450px;
	}
</style>

<script>
import { css } from '@emotion/css';
import media from '../../utils/media';


const dataSearchCls = isFullWidth => css`
	font-size: 14px;
	#SearchSensor-downshift > div {
		width: 450px;
		font-size: 14px;
	}

	#SearchSensor-downshift > div > ul{
		background: #05070b;
		border-top: none;
		margin-top: -7px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		-webkit-animation: cssAnimation 0.5s forwards; 
    	animation: cssAnimation 0.5s forwards;
	} 

	@keyframes cssAnimation {
		0%   {opacity: 0;}
		90%  {opacity: 0;}
		100% {opacity: 1;}
	}
	@-webkit-keyframes cssAnimation {
		0%   {opacity: 0;}
		90%  {opacity: 0;}
		100% {opacity: 1;}
	}

	#SearchSensor-downshift > div > ul >li {
		background: none !important;
	}

	#SearchSensor-downshift > div > ul >li:hover, #SearchSensor-downshift > div > ul >li:active, #SearchSensor-downshift > div > ul >li:focus, #SearchSensor-downshift > div > ul >li:visited{
		background: #cccccc24 !important;
	}


	input {
		outline: none;
		display: block;
	}
	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button {
		display: none;
	}
	input:-moz-placeholder {
		color: transparent;
	}
	input::-webkit-input-placeholder {
		color: transparent;
	}

	input {
		background: transparent
			url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png)
			no-repeat 3.5px 2.5px;
		background-size: 28px 27px;
		border: 1.5px solid #979797;
		padding: 9px 10px 9px 32px;
		margin: 0 0 0 auto;
		width: 15px;
		padding-left: 10px;
		color: transparent;
		cursor: pointer;
		height: auto;
		line-height: initial;

		-webkit-border-radius: 10em;
		-moz-border-radius: 10em;
		border-radius: 10em;

		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		transition: all 0.5s;
		-webkit-appearance: textfield;
		-webkit-box-sizing: content-box;
		font-family: inherit;
		font-size: 100%;
		${isFullWidth
			&& media.medium(css`
				width: calc(100% - 40px);
				color: #000;
			`)}
		${isFullWidth
			? `width: 400px;
        padding-left: 32px;
        color: #979797;
        background-color: transparent;
        cursor: auto;
        ::-webkit-input-placeholder {
        color: #979797;
        }
        ::-moz-placeholder {
        color: #979797;
        }
        `
                : ''}
        }

	input:focus {
		width: 400px;
		padding-left: 32px;
		color: #979797;
		background-color: transparent;
		cursor: auto;
		${!isFullWidth ? `
			border-radius: 0;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			width: 405px; 
		` : ''}
		
	}

	input:focus::-webkit-input-placeholder {
		color: #979797;
	}
	input:focus::-moz-placeholder {
		color: #979797;
	}
	.search-icon {
		display: none;
	}
	${media.medium(css`
		input:focus {
			width: calc(100% - 40px);
			color: #000;
		}
	`)}
`;


export default {

    data() {
        return {
            dataSearchCls,
        }
    },
	mounted() {
		if (!this.isSearchPage()) {
			this.$refs['data-search'].$children[0].$refs['input'].addEventListener('keydown', (e) => {
				const { value } = e.target;
				if (e.key === 'Enter' && value.trim()) {
					if (!window.location.href.includes('search')) {
						this.$router.push(`/search?SearchSensor="${value.replace(/\s/g, '+')}"`);
					}
				}
			});
		}
	
	},
    methods: {
        isSearchPage() {
            try {
                return window.location.href.includes('search') || window.location.href.includes('product') || window.location.href.includes('cart');
            } catch (e) {
                return false;
            }
        },

		handleKeyPress(e) {
			const { value } = e.target;
			if (e.key === 'Enter' && value.trim()) {
				if (!window.location.href.includes('search')) {
					this.$router.push(`/search?SearchSensor="${value.replace(/\s/g, '+')}"`);
				}
			}
		},
		handleSuggestion(currentValue) {
			if (!window.location.href.includes('search') && arguments[1] !== 'ENTER') {
				this.$router.push(`/search?SearchSensor="${currentValue.replace(/\s/g, '+')}"`);
			}
		},
    }
}
</script>