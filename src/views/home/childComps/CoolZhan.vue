<template>
  <div class="coolzhan">
    <div class="info">酷站</div>
    <ul>
      <li v-for="(item, index) in coolzhan"
      :key="index"><a :href="item.url">
        {{item.title}}</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "CoolZhan",
  props: {
    coolzhan: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.coolzhan {
  margin: 20px 8px;

  box-shadow: 0px 0px 10px rgb(231, 218, 218);
}
.coolzhan .info {
  width: 120px;
  padding: 2px;
  font-size: 12px;
  color: rgb(37, 35, 35);
  background-color: rgb(236, 222, 222);
  text-align: center;
}
.coolzhan li {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-bottom: 6px;
}
.coolzhan li a {
  color: #000;
}

</style>