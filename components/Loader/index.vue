<template>
  <Flex
    justifyContent="center"
    alignItems="center"
    :class="{ height: '100vh', 'font-size': '3.2rem' }"
  >
    <a-icon type="loading" />
  </Flex>
</template>

<script>
import Flex from '../Flex';

export default {
  components: {
    Flex,
  },
};
</script>
