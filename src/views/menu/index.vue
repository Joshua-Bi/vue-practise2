<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="1" class="el-menu-vertical-demo" router>
                    <div class="title">游戏时光</div>
                    <el-menu-item index="/home">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>系统概览</span>
                    </el-menu-item>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group title="管理员管理">
                            <el-menu-item index="3-1">产品管理员</el-menu-item>
                            <el-menu-item index="3-2">用户管理员</el-menu-item>
                            <el-menu-item index="3-3">消息管理员</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="员工管理">
                            <el-menu-item index="3-4">用户列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon>
                                <TakeawayBox />
                            </el-icon>
                            <span>产品管理</span>
                        </template>
                        <el-menu-item-group title="入库管理">
                            <el-menu-item index="product_manage_list">产品列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="出库管理">
                            <el-menu-item index="out_product_manage_list">出库列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="5">
                        <template #title>
                            <el-icon>
                                <ChatSquare />
                            </el-icon>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group title="消息管理">
                            <el-menu-item index="message_list">消息列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="回收站">
                            <el-menu-item index="recycle">回收站</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="file">
                        <el-icon><icon-menu /></el-icon>
                        <span>合同管理</span>
                    </el-menu-item>
                    <el-menu-item index="operation_log">
                        <el-icon><icon-menu /></el-icon>
                        <span>操作日志</span>
                    </el-menu-item>
                    <el-menu-item index="login_log">
                        <el-icon><icon-menu /></el-icon>
                        <span>登录日志</span>
                    </el-menu-item>
                    <el-menu-item index="set">
                        <el-icon>
                            <Tools />
                        </el-icon>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>

            </el-aside>
            <el-container>
                <el-header>
                    <span class="header-left-content">尊敬的{{userStore.name}}欢迎您登录本系统</span>
                    <div class="header-right-content">
                        <el-badge :is-dot=true class="item" @click="openDepartmentMessage">
                            <el-icon :size="20" class="message">
                                <Message />
                            </el-icon>
                        </el-badge>
                        <el-avatar :size="24" :src="circleUrl" />
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                设置
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>设置账号</el-dropdown-item>
                                    <el-dropdown-item>更改头像</el-dropdown-item>
                                    <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>

                </el-header>
                <el-main>
					<router-view></router-view>
				</el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script setup lang="ts">
import {
    Menu as IconMenu,
} from '@element-plus/icons-vue'
import { timelineItemProps } from 'element-plus';
import { reactive, ref, toRefs } from 'vue'
import {useRouter} from 'vue-router';
import { userInforStore } from '@/store/userinfor'

const router = useRouter()
const userStore = userInforStore()

const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',

})

const goLogin = () =>{
    router.push('/login')
}

const { circleUrl } = toRefs(state)


</script>
<style lang="scss" scoped>
// 侧边栏
.el-container {
    height: 100vh;
    display: flex;
}

.el-aside {
    height: 100%;
    background: #262731;
    width: 210px;
    // 隐藏滚动条
    overflow-x: hidden;

    // 菜单
    .el-menu {
        background: #262731;
        width: 210px;
        height: 100%;
        border-right: 0;
    }

    // 标题
    .title {
        padding: 20px;
        display: flex;
        justify-content: center;
        color: #eba2a2;
        background: #262731;
    }

    .el-menu-item {
        color: #fff;
    }

    // .el-sub-menu__title {
    // 	color: #fff;
    // }
}

.el-header {
    display: flex;
    height: 55px;
    background: #282d37;
    padding: 0 20px;
    color: #c1c6c8;
    align-items: center;
    justify-content: space-between;

    // 欢迎语
    .header-left-content {
        font-size: 14px;
    }

    .header-right-content {
        width: 160px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}

// 徽章
.item {
    cursor: pointer;
}

.el-main {
    --el-main-padding: 0;
    background-color: #e1e6ef;
    height: calc(100vh - 55px);
}

// 无子菜单的
.el-menu-item[data-v-cfd38c0b]:hover {
    background: #006eff;
}

// 有子菜单的
:deep(.el-sub-menu__title:hover) {
    background: #006eff;
}

:deep(.el-sub-menu__title) {
    color: #fff;
}

:deep(.el-menu--inline) {
    background: #2b303b;
}
</style>
