<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="item.text">
        <span>{{index}} - </span>
        <a :href="item.url">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArchive } from "network/archive.js";
export default {
  name: "Archive",
  data() {
    return {
      list: []
    };
  },
  created() {
    getArchive().then(res => (this.list = res.data.list));
  }
};
</script>

<style scoped>
</style>