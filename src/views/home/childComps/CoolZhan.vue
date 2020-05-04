<template>
  <div class="coolzhan">
    <div class="info">coolzhan</div>
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
  margin-top: 20px;
  background-color: rgb(241, 231, 231);
}
.coolzhan li {
  background-color: rgb(5, 40, 236);
  padding: 10px;
  margin-bottom: 6px;
}
.coolzhan li a {
  color: aliceblue;
}

</style>