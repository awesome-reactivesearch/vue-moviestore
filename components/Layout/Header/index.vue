<template>
    <div :class="classes.headerCls">
        <nav class="menuBar">
            <div class="logo">
                <nuxt-link to="/">
                    <product-image
                        :placeholderStyle="{
                            width: '210px',
                            height: '64px',
                        }"
                        src="/images/logo@1x.png"
                        alt="logo"
                    />
                </nuxt-link>
            </div>
            <div class="menuCon">
                <div class="leftMenu">
                    <left-menu />
                </div>
                <div class="rightMenu">
                    <right-menu />
                </div>
                <a-button class="barsMenu" @click="showDrawer">
                    <span class="barsBtn" />
                </a-button>
                <a-drawer
                    :class="classes.drawerCls"
                    placement="right"
                    :closable="true"
                    :visible="visible"
                    @close="onClose"
                >
                    <left-menu />
                    <right-menu mode="vertical" :onClose="onClose()"/>
                </a-drawer>
            </div>
        </nav>
    </div>
</template>

<script>
import { headerCls, drawerCls } from "./styles";
import LeftMenu from "./LeftMenu.vue";
import RightMenu from './RightMenu.vue';
import AppImage from '../../CustomImage.vue';

export default {
    data() {
        return {
            visible: false,
            classes: {
                headerCls,
                drawerCls,
            }
            
        }
    },
    methods: {
        showDrawer() {
            this.visible = true
        },
        onClose() {
            this.visible = false
        }
    },
    components: {
        'product-image': AppImage,
        'left-menu': LeftMenu,
        'right-menu': RightMenu,
    }
}
</script>

