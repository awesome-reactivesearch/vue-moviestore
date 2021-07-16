<template>
    <div :style="{ display: 'flex',justifyContent:'center'}">
        <a-button :class="btnCls" v-bind="$attrs">
            <slot name="primaryButton"></slot>
        </a-button>
    </div>
</template>

<script>
import { css } from '@emotion/css';
import { themeConfig } from '../../utils/constants';

const btnCls = css`
  background-color: ${themeConfig.secondary};
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.14px;
  line-height: 13px;
  border: none;
  text-transform: uppercase;
  margin-right: 20px;
  &:hover {
    background-color: ${themeConfig.secondary};
    color: #fff;
  }
`;

export default {
    data() {
       return {
           btnCls,
       } 
    },
    props: {
        isCheckout: Boolean,
    }
}
</script>
