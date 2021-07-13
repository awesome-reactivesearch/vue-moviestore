<template>
	<div>
        <a-button :class="mainCls" @click="showDrawer">
            <a-icon class="icon" type="menu-unfold" />
        </a-button>
        <a-drawer
            :class="drawerCls"
            placement="right"
            title="Tutorials"
            :visible="visible"
            @close="onClose"
        >
            <div v-for="(tutorial,index) in tutorials" :key="index">
                <div v-if="tutorial.isPublished">
                    <a
                        :key="tutorial.title"
                        :href="tutorial.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="tutorial">
                            <Flex>
                                <span>{{tutorial.title}}</span>
                                <a-icon type="arrow-right" />
                            </Flex>

                            <div class="subtitle">{{tutorial.description}}</div>
                        </div>
                    </a>
                </div>
                <div v-else :key="tutorial.title" class="tutorial disabled">
                    <Flex>
                        <span>{{tutorial.title}}</span>
                        <a-icon type="arrow-right" />
                    </Flex>

                    <div class="subtitle">{{tutorial.description}}</div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script>
import { css } from '@emotion/css';
import Flex from './Flex';
import { themeConfig, tutorials } from '../utils/constants';

const mainCls = css`
	color: rgb(255, 57, 87);
	position: absolute;
	background-color: ${themeConfig.secondary};
	z-index: 10;
	top: 50%;
	right: 20px;
	padding: 2px;
	border-radius: 25px;
	cursor: pointer;
	text-align: center;
	vertical-align: middle;
	height: 50px;
	width: 50px;
	&:hover {
		background-color: ${themeConfig.secondary} !important;
	}
	.icon {
		color: #fff;
		font-size: 28px;
		margin-top: 3px;
	}
`;

const drawerCls = css`
	.ant-drawer-content {
		background: ${themeConfig.secondaryBg};
	}
	.ant-drawer-body {
		padding: 0;
		padding-top: 60px;
	}
	.ant-drawer-close-x {
		color: #fff;
	}
	.ant-drawer-header {
		background: ${themeConfig.secondary};
		border: none;
		position: fixed;
		top: 0;
		width: 100%;
		margin-bottom: 20px;
		.ant-drawer-title {
			color: #fff;
		}
	}
	color: #fff;
	.disabled {
		pointer-events: none;
		opacity: 0.2;
	}
	.tutorial {
		cursor: pointer;
		color: #fff;
		font-size: 20px;
		padding: 10px 24px;
		border-bottom: 2px solid #111114;
		div {
			justify-content: space-between;
			align-items: center;
		}
		&:hover {
			color: #fff;
		}
		.subtitle {
			font-size: 14px;
			color: #979797;
		}
	}
`;

export default {
    data() {
       return {
           mainCls,
           drawerCls,
           visible: false,
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
        Flex,
    }
}
</script>
