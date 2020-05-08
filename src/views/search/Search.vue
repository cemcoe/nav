<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  name: "Search"
};
</script>

<style scoped>
</style>