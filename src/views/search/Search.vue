<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <p>
      <span @click="kaiClick">开</span>发中，你要查询的关键词：{{value}}
    </p>
    <div v-if="isadult">{{pron}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

import { getKeywords } from "network/search";

Vue.use(Search);
export default {
  name: "Search",
  data() {
    return {
      value: null,
      pron: [],
      open: -6,
      isadult: false
    };
  },
  created() {
    this.getKeywords();
  },
  methods: {
    getKeywords() {
      getKeywords().then(res => {
        // this.password = res.data.password;
        this.pron = res.data.pron;
      });
    },
    kaiClick() {
      console.log("car run");
      this.open++;
      if (this.open === 0) {
        this.isadult = !this.isadult;
      }
    }
  }
};
</script>

<style scoped>
</style>