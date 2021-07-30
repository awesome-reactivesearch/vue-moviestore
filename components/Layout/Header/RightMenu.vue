<template>
    <div>
        <a-menu :mode="mode">
            <a-menu-item key="search">
                <nuxt-link to="/search">Search</nuxt-link >
            </a-menu-item>
            <a-menu-item key="login">
                <div v-if="$auth.loggedIn">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                    {{ $auth.user.name }} <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                    <a-menu-item @click="logout">
                        <a href="javascript:;">Log Out</a>
                    </a-menu-item>
                    </a-menu>
                </a-dropdown>
                </div>
                <div @click="login" v-else>
                <nuxt-link to="/">
                    <div>Login</div>
                </nuxt-link>
                </div>
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
    },
    data: function() {
        console.log(this.$auth);
        return {};
    },
    methods: {
        login() {
            this.$auth.loginWith('auth0');
        },
        async logout() {
            await this.$auth.logout();
        },
    },
}
</script>
