<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="/friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/seeting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "MainTabbar"
};
</script>

<style>
</style>