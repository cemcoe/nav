<template>
  <div id="home">
    <main-nav-bar />
    <loading v-if="isLoading"></loading>
    <div v-else>
      <ming-zhan :mingzhan="mingzhan" />
      <cool-zhan :coolzhan="coolzhan" />
    </div>
  </div>
</template>

<script>
import MainNavBar from "./childComps/MainNavBar";
import MingZhan from "./childComps/MingZhan";
import CoolZhan from "./childComps/CoolZhan";

import Loading from "@/components/common/Loading";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      mingzhan: [],
      coolzhan: [],
      isLoading: true,
    };
  },
  components: {
    MainNavBar,
    MingZhan,
    CoolZhan,
    Loading,
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res.data.mingzhan);
        this.mingzhan = res.data.mingzhan;
        this.coolzhan = res.data.coolzhan;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
