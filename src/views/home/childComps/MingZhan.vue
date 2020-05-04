<template>
  <div class="mingzhan">
    <ul>
      <li v-for="(item, index) in mingzhan" :key="index">
        <a target="_blank" :href="item.url">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MingZhan",
  props: {
    mingzhan: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.mingzhan ul {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: rgb(247, 240, 240);
}
.mingzhan li {
  flex: 0 0 20%;
  box-sizing: content-box;
  text-align: center;
  height: 60px;
  box-sizing: border-box;
}
.mingzhan li:nth-of-type(2n) {
  background-color: rgb(231, 221, 219);
}
.mingzhan li a {
  color: rgb(3, 3, 3);
  display: block;
  width: 100%;
  height: 100%;
  line-height: 60px;
}
</style>