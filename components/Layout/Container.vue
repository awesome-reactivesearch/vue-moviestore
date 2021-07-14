<template>
    <div>
        <a-layout :class="layoutCls" class="layout">
            <reactive-base
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
                :appbaseConfig="{ recordAnalytics: true,enableQueryRules: false }"
            >
                <tutorial-menu />
                <slot name="container"></slot>
            </reactive-base>
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
import TutorialMenu from "../TutorialMenu.vue";

const layoutCls = css`
 background: #152530;
 color: #fff;
 font-family: Lato;
`;

export default {
    name: "Container",   
    components: {
        'tutorial-menu': TutorialMenu,
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