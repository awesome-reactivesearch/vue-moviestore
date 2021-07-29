<template>
    <div>
        <a-layout :class="layoutCls" class="layout">
            <reactive-base
                enableAppbase
                url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io" 
                app="movies-store-app" 
                credentials="a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61" 
                :theme="{
                    typography: {
                        fontFamily: 'Lato',
                    },
                }"
                :appbaseConfig="{ recordAnalytics: true }"
            >
                <slot name="container"></slot>
            </reactive-base>
        </a-layout>
    </div>
</template>

<script>
// import { ReactiveBase } from '@appbaseio/reactivesearch';
import { css } from '@emotion/css'
import {
	appBaseConfig,
} from '../../utils/constants';

const layoutCls = css`
 background: #152530;
 color: #fff;
 font-family: Lato;
`;

export default {
    name: "Container",   
    props: {
        title: {
            type: String,
            default: function () {
                return 'Movies Store';
            }
        }
    },
    head() {
        return {
            title: "Movies Store",
        }
    },
    data() {
        return {
            layoutCls,
            appBaseConfig
        }
    }
};
</script>