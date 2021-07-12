<template>
    <span :class="button" v-bind="$attrs">
		PURCHASE
   </span>
</template>

<script>
import { css } from '@emotion/css';
import { themeConfig } from '../../utils/constants';

const button = css`
	color: ${themeConfig.secondary};
	font-size: 14px;
	letter-spacing: 0.14px;
	cursor: pointer;
	margin-right: 20px;
    margin-bottom: 0px;
`;

export default {
    data() {
        return {
            button,
        
        }
    },
    props: {
        price: Number,
        title: String,
    }
}
</script>
