<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        router
        @select="handleSelect"
    >
    <!-- isAuthenticated:{{ useAuthStore().isAuthenticated }} -->
    <div style="display: flex; align-items: center;margin:0 20px;">
        後台系統管理
    </div>
        <el-menu-item index="/">首頁</el-menu-item>
        <el-menu-item index="/DepartmentList">所處</el-menu-item>
        <el-menu-item index="/backendHome">編輯連結</el-menu-item>
        <el-menu-item index="/backendDepartmentList">編輯所處</el-menu-item>
        <el-menu-item class="m-right" index="/backendSupervisorProfile">編輯主管個人資料</el-menu-item>

        <el-menu-item @click="logoutHandler()">
                登出
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth"; // 引入 store

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
//登出功能
function logoutHandler() {
    // 登出
    useAuthStore().logout();
    // 跳轉到登入頁面
    router.push("/login");
}
// 選定的選單項目
const activeIndex = ref(null);
const handleSelect = (key, keyPath) => {
    // console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.float-right {
    margin-left: auto;
}
.m-right {
    margin-right: auto;
}
</style>
