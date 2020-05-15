<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <p>开发中，你要查询的关键词：{{value}}</p>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  name: "Search",
  data() {
    return {
      value: null
    }
  }
};
</script>

<style scoped>
</style>