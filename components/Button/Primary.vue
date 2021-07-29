<template>
  <Flex justifyContent="center">
    <custom-button v-bind="$attrs">
      <slot name="primaryButton"></slot>
    </custom-button>
  </Flex>
</template>

<script>
import { css } from '@emotion/css';
import { styled } from '@egoist/vue-emotion';
import { themeConfig } from '../../utils/constants';

export const CustomButton = styled('button')`
  background-color: ${themeConfig.secondary};
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
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
    return {};
  },
  components: {
    'custom-button': CustomButton,
  },
  props: {
    isCheckout: Boolean,
  },
};
</script>
