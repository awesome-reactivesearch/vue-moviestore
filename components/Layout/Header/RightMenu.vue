<template>
    <div>
        <a-menu :mode="mode">
            <a-menu-item key="search">
                <nuxt-link to="/search">Search</nuxt-link >
            </a-menu-item>
            <a-menu-item key="login">
                <nuxt-link  to="/login">Login</nuxt-link >
            </a-menu-item>
            <a-menu-item key="cart">
                <nuxt-link  to="/cart">Cart</nuxt-link >
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    props : {
        mode: {
            type: String,
            default: function () {
                return 'horizontal';
            }
        }
    }
}
</script>
