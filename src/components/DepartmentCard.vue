<template>
    <div class="content card_wrap">
        <h2 class="txt-color">{{ data.name }}</h2>
        <h3 v-if="data.title" class="txt-color">{{ data.title }}</h3>
        <!-- <span v-if="data.manager">主管: </span>  -->
        <template v-for="(m, idx) in data.managers" :key="idx">
            <span style="margin-right: 5px">{{ m.role }}:</span>
            <span
                class="link_txt"
                style="margin-right: 5px"
                @click="routerPush(m)"
                >{{ m.name }}</span
            >
            <span>{{ m.title }}</span>
            <br />
        </template>
        <!-- <router-link to="/">{{data.manager}}</router-link>
        {{ data.managerTitle }}
        <br> -->
        <span style="font-weight: bold; display: inline-block; margin-top: 5px">
            核心業務
        </span>
        <ul>
            <li v-for="(item, index) in data.core" :key="index">
                <p>{{ item }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
const routerPush = (data) => {
    if (props.disabled) {
        return;
    }
    const { name: manager, title } = data;
    if (!manager) {
        alert("此部門尚未指定主管資料");
        return;
    }
    router.push({
        name: "SupervisorProfile",
        params: { manager, title },
    });
    //   router.push({
    //   name: 'SupervisorProfile',
    //   state: { manager, title }
    // })
};
</script>

<style scoped lang="scss">
.card_wrap {
}
.txt-color {
    color: #a47332;
}
.link_txt {
    color: #525af8;
    text-decoration: underline;
    cursor: pointer;
}
</style>
