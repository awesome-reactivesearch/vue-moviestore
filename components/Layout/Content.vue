<template>
    <div>
        <a-layout-content v-bind="$attrs">
            <slot name="content"></slot>
        </a-layout-content>
        <!-- <div :class="footerCls">
            Appbase.io ©{{ new Date().getFullYear() }} created by Appbase Inc.
        </div> -->
    </div>
</template>

<script>
import { css } from '@emotion/css';

const footerCls = css`
    text-align: center;
    background: #04070b;
    color: #fff;
    padding: 24px 50px;
    position: relative;  
    font-size: 14px;
 `

export default {
    data() {
       return {
           footerCls,
       } 
    },
}
</script>
