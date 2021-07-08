<template>
    <div>
        <a-layout-footer :class="footerCls">
            Appbase.io ©{{ new Date().getFullYear() }} Created by Appbase Inc.
        </a-layout-footer>
    </div>
</template>

<script>
import { css } from '@emotion/css'

const footerCls = css`
  text-align: center;
  background: #04070b;
  color: #fff;
`;

export default {
   data() {
       return {
           footerCls,
       }
   }
}
</script>
