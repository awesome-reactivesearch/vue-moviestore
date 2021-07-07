<template>
    <div :class="classes.headerCls">
        <nav class="menuBar">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="/images/logo@1x.png" alt="logo" />
                </NuxtLink>
            </div>
            <div class="menuCon">
                <div class="leftMenu">
                    <left-menu />
                </div>
                <div class="rightMenu">
                    <right-menu />
                </div>
                <a-button class="barsMenu" :onClick="showDrawer">
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
                <right-menu mode="vertical" />
                </a-drawer>
            </div>
        </nav>
    </div>
</template>

<script>
import { headerCls, drawerCls } from "./styles";
import LeftMenu from "./LeftMenu.vue";
import RightMenu from './RightMenu.vue';

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
        'left-menu': LeftMenu,
        'right-menu': RightMenu,
    }
}
</script>

