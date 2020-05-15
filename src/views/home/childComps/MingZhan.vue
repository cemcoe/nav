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
.mingzhan {
  margin: 20px 4px;
  box-shadow: 0px 0px 10px rgb(238, 235, 235);
}
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
  height: 46px;
  box-sizing: border-box;
}
.mingzhan li:nth-of-type(2n) {
  background-color: rgb(231, 221, 219);
  /* border: 1px solid blue; */
  box-shadow: inset -1px -1px 3px rgb(128, 151, 156),
  inset 1px 1px 3px rgb(247, 251, 252);
}
.mingzhan li a {
  color: rgb(3, 3, 3);
  display: block;
  width: 100%;
  height: 100%;
  line-height: 46px;
}
</style>