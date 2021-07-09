<template>
    <div>
        <app-container tiitle="Search">
            <template v-slot:container>
                <app-header />
                
                <app-content>
                    <template v-slot:content>
                        <app-section>
							<selected-filters
								className="filter-class"
								filterLabel="Filters"
								showClearAll="default"
								clearAllLabel="Clear filters"
							/>
						</app-section>
                        <!-- <multi-list
                            componentId="year-list"
                            dataField="release_year"
                            :size="20"
                            sortBy="desc"
                            queryFormat="or"
                            selectAllLabel="All"
                            :showCheckbox="true"
                            :showSearch="true"
                            placeholder="Search for a Year"
                            :react="{ and: ['SearchSensor', 'results', 'price', 'language-list'] }"
                            :showFilter="true"
                            :showCount="false"
                            filterLabel="Year"
                            :URLParams="false"
                        /> -->

                        <multi-list
                            componentId="language-list"
                            dataField="original_language.keyword"
                            :size="100"
                            sortBy="count"
                            queryFormat="or"
                            selectAllLabel="All Languages"
                            :showCheckbox="true"
                            :showSearch="true"
                            placeholder="Search for a language"
                            :react="{ and: ['SearchSensor', 'results', 'price', 'year-list'] }"
                            :showFilter="true"
                            filterLabel="Language"
                            :URLParams="false"
                        >
                            <div slot="renderItem" slot-scope="{label,count}">
                                <span>
                                    <span className="multilist-checkbox">
                                      {{languageMap[label] || label}}
                                    </span>
                                    <span v-if="count">{{count}}</span>
                                </span>
                            </div>
                        </multi-list>

                       <!-- <range-slider
                            componentId="price"
                            :react="{ and: ['SearchSensor', 'language-list', 'year-list'] }"
                            dataField="price"
                            :range="{
                                start: 0,
                                end: 1500,
                            }"
                            :showHistogram="false"
                            :rangeLabels="{
                            start: '$0',
                            end: '$1500',
                            }"
                        /> -->

                        <reactive-list
                            componentId="results"
                            dataField="original_title"
                            :react="{ and: ['SearchSensor', 'price', 'language-list', 'year-list'] }"
                            :pagination="true"
                            paginationAt="bottom"
                            :pages="5"
                            :size="4"
                            Loader="Loading..."
                            noResults="No results were found..."
                            :sortOptions="[
                                {
                                'dataField': 'popularity',
                                'sortBy': 'desc',
                                'label': 'Sort by Popularity(High to Low)\u00A0 \u00A0'
                                },
                                {
                                'dataField': 'price',
                                'sortBy': 'asc',
                                'label': 'Sort by Price(Low to High) \u00A0'
                                },
                                {
                                'dataField': 'vote_average',
                                'sortBy': 'desc',
                                'label': 'Sort by Ratings(High to Low) \u00A0'
                                },
                                {
                                'dataField': 'original_title.keyword',
                                'sortBy': 'asc',
                                'label': 'Sort by Title(A-Z) \u00A0'
                                }
                            ]"
                        >
                            <div slot="renderItem" slot-scope="{ item }">
                                <product-card 
                                    :id="item.id"
                                    :posterPath="item.poster_path"
                                    :originalTitle="item.original_title"
                                    :releaseYear="item.release_year"
                                    :genresData="item.genres_data"
                                    :overview="item.overview"
                                    :price="item.price"
                                    :voteAverage="item.vote_average"
                                />
                            </div>
                        </reactive-list> 
                    </template>
                </app-content>
    
                <app-footer />
            </template>
        </app-container>
    </div>

    
</template>

<script>
import Container from "../components/Layout/Container.vue";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Content from "../components/Layout/Content.vue";
import ProductCard from "../components/Product/ProducrCard.vue";
// import Page from '../components/Page';
import media from '../utils/media';
import { themeConfig } from '../utils/constants';
import { languageMap } from '../utils/helper';
import { Title,Section } from "../components/Layout/styles";
import { css } from '@emotion/css'

const searchCls = css`
	.filter-class {
		a {
			&:hover {
				color: ${themeConfig.secondary};
			}
		}
	}
	.filter-btn {
		background-color: ${themeConfig.secondary};
		z-index: 10;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		position: fixed;
		top: 140px;
		right: 20px;
		color: #fff;
		font-size: 26px;
		padding: 2px 6px;
		cursor: pointer;
		display: none;
		&:hover {
			border: 1px solid #fff;
		}
	}
	.year-filter {
		color: #808184;
		font-size: 13px;
		font-family: "Open Sans";
	}
	.multilist-checkbox {
		&:before {
			border: 1px solid #808184;
			background-color: transparent;
		}
		&:after {
			border-color: ${themeConfig.secondary};
		}
	}
	.checkbox {
		&:hover {
			+ label {
				&:hover {
					color: ${themeConfig.secondary};
				}
				&::before {
					border-color: ${themeConfig.secondary};
				}
			}
		}
		&:checked {
			+ label {
				&::before {
					border: 1px solid #808184;
					background-color: transparent;
				}
			}
		}
	}
	.range-slider {
		color: red;
		.rheostat-handle {
			background-color: ${themeConfig.secondary};
			border: none;
		}
		.rheostat-progress {
			background-color: ${themeConfig.secondary};
		}
	}
	.range-slider-label {
		font-family: Lato;
		font-size: 14px;
		line-height: 17px;
	}
	.search-results {
		flex-direction: row;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.noResults {
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 500px;
		font-size: 20px;
		color: ${themeConfig.secondary};
	}
	.powered-by {
		display: none;
	}
	.pagination {
		a {
			background-color: #0c0e12;
			&:hover {
				color: ${themeConfig.secondary};
			}
			color: #fff;
		}
		a[disabled] {
			color: #3b3c3f;
		}
		.disabled {
			background-color: #0c0e12;
			color: #3b3c3f;
		}
		.active {
			background-color: ${themeConfig.secondary};
		}
	}
	.sort-options {
		margin-right: 30px;
	}
	.rightbar,
	.rightbar-optional {
		padding: 50px;
	}
	.resultStats {
		color: ${themeConfig.secondary};
		opacity: 0.95;
	}
	${media.medium(css`
		.sort-options {
			margin-right: 0;
		}
		.rightbar,
		.rightbar-optional {
			padding: 20px;
		}
		.resultStats {
			display: none;
		}
		.filter-btn {
			display: block;
		}
		.leftbar-optional {
			display: none;
		}
		.rightbar {
			display: none;
		}
	`)}
`;

export default {
    components: {
        'app-container': Container,
        'app-content': Content,
        'app-header': Header,
        'app-footer': Footer,
        'product-card': ProductCard,
        'app-title': Title,
        'app-section': Section
    },
    data() {
        return {
            languageMap,

        }
    }
}
</script>
