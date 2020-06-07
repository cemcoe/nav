<template>
  <div>
    <loading v-show="isLoading"></loading>
    <ul>
      <li v-for="(item, index) in list" :key="item.text">
        <span>{{index}} - </span>
        <a :href="item.url">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
import { getArchive } from "network/archive.js";
export default {
  name: "Archive",
  data() {
    return {
      list: [],
      isLoading: true
    };
  },
  components: {
    Loading,
  },
  created() {
    getArchive().then(res => {
      this.list = res.data.list
      this.isLoading = false
    });
  }
};
</script>

<style scoped>
</style>