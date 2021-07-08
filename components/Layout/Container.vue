<template>
    <div>
        <a-layout :class="layoutCls" class="layout">
            <slot name="container"></slot>
        </a-layout>
    </div>
</template>

<script>

import { css } from '@emotion/css'

const layoutCls = css`
 background: #152530;
 color: #fff;
 font-family: Lato;
`;

export default {
    name: "Container",   
    props: {
        title: String,
    },
    head() {
        return {
            title: "Movies Store",
        }
    },
    data() {
        return {
            layoutCls,
        }
    }
};
</script>