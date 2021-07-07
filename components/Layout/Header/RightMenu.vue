<template>
    <div>
        <a-menu :mode="mode">
            <a-menu-item key="search">
                <NuxtLink to="/search">Search</NuxtLink>
            </a-menu-item>
            <a-menu-item key="login">
                <NuxtLink to="/login">Login</NuxtLink>
            </a-menu-item>
            <a-menu-item key="cart">
                <NuxtLink to="/cart">Cart</NuxtLink>
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
