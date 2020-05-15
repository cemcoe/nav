<template>
  <div id="home">
    <main-nav-bar />
    <ming-zhan :mingzhan="mingzhan" />
    <cool-zhan :coolzhan="coolzhan" />
  </div>
</template>

<script>
import MainNavBar from './childComps/MainNavBar'
import MingZhan from "./childComps/MingZhan"
import CoolZhan from "./childComps/CoolZhan"

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      mingzhan: [],
      coolzhan: []
    };
  },
  components: {
    MainNavBar,
    MingZhan,
    CoolZhan
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res.data.mingzhan);
        this.mingzhan = res.data.mingzhan;
        this.coolzhan = res.data.coolzhan
      });
    }
  }
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