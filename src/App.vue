<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar'
export default {
  name: "App",
  components: {
    MainTabbar
  }
}
</script>

<style>

</style>
