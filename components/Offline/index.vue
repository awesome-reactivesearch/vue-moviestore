<template>

</template>

<script>
    export default {
        mounted() {
             if ('serviceWorker' in navigator) {
                navigator.serviceWorker
                .register('/sw.js')
                .then(() => console.log('service worker registered.'))
                .catch(err => console.dir(err));
            }
        }
    }
</script>