<template>
    <div>
        <a-layout :class="layoutCls" class="layout">
            <reactive-base
                :appbaseConfig="{ recordAnalytics: true,enableQueryRules: false }"
                enableAppbase
                url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io" 
                app="movies-store-app" 
                credentials="a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61"
                :initialState="reactiveSearchStore"
				themePreset="dark" 
                :theme="{
                    typography: {
                        'font-family': 'Lato',
                    },
                    colors: {
                        textColor: '#979797',
                        primaryTextColor: '#fff',
                        primaryColor: themeConfig.secondary,
                    },
                }"               
            >
                <no-ssr>
                    <div class="header-search-container ">
                        <search-box />
                    </div>   
                </no-ssr>     
                <tutorial-menu />
                <div style="margin-top: 70px">
                    <slot name="container"></slot>
                </div>    
            </reactive-base> 
            <app-footer />
        </a-layout>
    </div>
</template>

<style>
    .header-search-container {
        top: 14px;
        position: fixed;
        right: 250px;
        z-index: 999;

    }

    @media(max-width:600px) {
        .header-search-container {
            top: 60px;
            right: 20px;
        }
    }

</style>
<script>
// import { ReactiveBase } from '@appbaseio/reactivesearch';
import { css } from '@emotion/css'
import {
	themeConfig,
	appBaseConfig,
} from '../../utils/constants';
import Footer from './Footer.vue';
import TutorialMenu from "../TutorialMenu.vue";
import SearchBox from '../SearchBox';

const layoutCls = css`
 background: ${themeConfig.primary};
 color: #fff;
 height: 100vh;
 .footerCls {
    text-align: center;
    background: #04070b;
    color: #fff;
    padding: 24px 50px;
    position: relative;  
 }
`;

export default {
    name: "Container",   
    components: {
        'tutorial-menu': TutorialMenu,
        'app-footer': Footer,
        'search-box': SearchBox,

    },

    data() {
        return {
            layoutCls,
            appBaseConfig,
            themeConfig
        }
    },
    head() {
        return {
            title: "Movies Store",
        }
    },
    props: {
        title: {
            type: String,
            default: function () {
                return 'Movies Store';
            }
        },
        reactiveSearchStore: Object,
	    updateRoute: Function,
    },  
};
</script>