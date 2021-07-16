<template>
    <div>
        <data-search
            :className="[dataSearchCls(isSearchPage()), 'search-container']"
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
            :fieldWeights="[10, 4, 10, 4, 2, 1, 2, 1]"
			:fuzziness="1"
			:autosuggest="false"
			filterLabel="search"
			placeholder="Search for movies"
            queryFormat="and"
			:showClear="true"
            :URLParams="isSearchPage()"
			@keyDown="handleKeyPress"
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
    methods: {
        isSearchPage() {
            try {
                return window.location.href.includes('search');
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
    }
}
</script>