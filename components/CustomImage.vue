<template>
    <div>
        <progressive-img
            src="https://unsplash.it/1920/1080?image=10"
            placeholder="https://unsplash.it/1920/1080?image=10"
        />
        <!-- <progressive-img :class="mainCls" src="src" placeholder="">
            
            <div slot="content" slot-scope="{ visible }">
                <img
					src="src"
					alt="alt"
					class="[loading ? `${className} loading-img` : className]"
					v-bind="$attrs"
				/>
                <div v-show="visible">
                    <div
                        :style="{ background: themeConfig.primaryImage, ...placeholderStyle }"
                        v-bind="$attrs"
				/>
                </div>
            </div>
        </progressive-img> -->
    </div>
</template>

<script>
import { css } from '@emotion/css';
import { themeConfig } from '../utils/constants';

const mainCls = css`
	img {
		opacity: 1;
		transition: opacity 0.25s ease-in;
	}

	img.loading-img {
		opacity: 0.5;
	}
`;

export default {
    name: 'AppImage',
    props : {
        src: String,
        srcSet: String,
        className: String,
        placeholderStyle: Object,
        alt: String,
    },
    data() {
       return {
           mainCls,
           themeConfig
       } 
    },
    components: {
        
    }
}
</script>