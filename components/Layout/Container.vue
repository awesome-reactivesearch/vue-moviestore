<template>
    <div>
        <a-layout css={layoutCls} class="layout">
            <a-layout-header>{{ title }}</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
</template>

<script>

import { css, cx } from '@emotion/css'

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
};
</script>