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
                        fontFamily: 'Lato',
                    },
                    colors: {
                        textColor: '#979797',
                        primaryTextColor: '#fff',
                        primaryColor: themeConfig.secondary,
                    },
                }"               
            >
                <tutorial-menu />
                <slot name="container"></slot>
            </reactive-base>
            <app-footer />
        </a-layout>
    </div>
</template>

<script>
// import { ReactiveBase } from '@appbaseio/reactivesearch';
import { css } from '@emotion/css'
import {
	themeConfig,
	appBaseConfig,
} from '../../utils/constants';
import Footer from './Footer.vue';
import TutorialMenu from "../TutorialMenu.vue";

const layoutCls = css`
 background: ${themeConfig.primary};
 color: #fff;
 font-family: Lato;
 height: 100vh;
`;

export default {
    name: "Container",   
    components: {
        'tutorial-menu': TutorialMenu,
        'app-footer': Footer,

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