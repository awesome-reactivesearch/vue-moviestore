<template>
    <div>
        <a target="_blank" :href="href" :class="mainCls" v-bind="$attrs">
            {{ title }}
            <a-icon type="play-circle" class="play-icon" />
        </a>
    </div>
</template>

<script>
import { css } from '@emotion/css';

const mainCls = css`
  line-height: 14px;
  color: #ffffff;
  cursor: pointer;
  .play-icon {
    margin-left: 10px;
  }
  &:hover {
    color: #ffffff;
  }
`;

export default {
    data() {
       return {
           mainCls,
       } 
    },
    props: {
        title: {
            type: String,
            default: function () {
                return 'Watch Trailer';
            },
        },
        href: String,
    }
}
</script>
