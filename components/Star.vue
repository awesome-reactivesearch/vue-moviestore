<template>
    <div>
        <Flex v-bind="$attrs" :style="{ color: '#ffe400' }">
            <div v-if="rating">
                <div v-for="(item,index) in  Array(Math.ceil(rating / 2)).fill('x')" :key="index">              
                    <i className="fas fa-star" />
                </div>
            </div>
            
        </Flex>
    </div>
</template>

<script>
import Flex from './Flex';

export default {
    name: "Star",
    props: {
        rating: Number,
    },
    components: {
        Flex,
    }
}
</script>
