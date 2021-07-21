<template>
    <div>
        <a-menu :mode="mode">
            <a-menu-item :class="searchLink" key="search">
                <Flex justifyContent="flex-end">
                    <!-- <search-box /> -->                   
                    <!-- <a-icon
                        class="close-placement"
                        :style="{
                            fontSize: 20,
                        }"
                        type="close"
                        @click="onClose"
                    /> -->
                </Flex>
            </a-menu-item>
            <a-menu-item key="cart">
                <nuxt-link  to="/cart">Cart ({{this.$store.state.cartCount}})</nuxt-link >
            </a-menu-item>
              <a-menu-item key="login">
                 <div v-if="$auth.loggedIn">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
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
                        </nuxt-link >
                 </div>    
            </a-menu-item>

        </a-menu>
    </div>
</template>

<script>
import SearchBox from "../../SearchBox"
import { mediaKey } from '../../../utils/media';
import { css } from '@emotion/css';
import Flex from "../../Flex";
import media from "../../../utils/media";
const searchLink = css`
  margin-bottom: 4px;
  .close-placement {
      display: none;
  }
   ${media.medium(css`
		.close-placement {
            display: block;
            padding: 8px 0px 8px 10px,;
        }
	`)}
`;

// const searchIcon = css `
//   display: 'none';
//   [mediaKey.medium]: {
//     display: 'block';
//     padding: '8px 0px 8px 10px';
// `;

export default {


    data() {
        return {
            searchLink,
            mediaKey,
            user: this.$auth,
        }
    },
    components : {
        'search-box': SearchBox,
        Flex,

    },

    props : {
        mode: {
            type: String,
            default: function () {
                return 'horizontal';
            }
        },
        numberOfCartItems: Number,
        userName: String,
        handleLogout: Function,
        onClose: Function,
        // mode: String,
    },

    methods: {
        login() {
            this.$auth.loginWith('auth0');
        },

        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>
