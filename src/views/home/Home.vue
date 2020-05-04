<template>
  <div id="home">
    <nav-bar>
      <div slot="center">Hello Chemcode</div>
    </nav-bar>
    <ming-zhan :mingzhan="mingzhan"></ming-zhan>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MingZhan from "./childComps/MingZhan"

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      mingzhan: []
    };
  },
  components: {
    NavBar,
    MingZhan
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res.data.mingzhan);
        this.mingzhan = res.data.mingzhan;
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