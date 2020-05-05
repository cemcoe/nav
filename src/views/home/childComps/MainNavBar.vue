<template>
  <div class="main-nav-bar">
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/loading.webp" alt="">
      </div>
      <div slot="center" class="hello">Hello Chemcode</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "MainNavBar",
  components: {
    NavBar,
  },
};
</script>

<style>
.left img {
  width: 44px;
  height: 44px;
  animation: loading 2s infinite;
}

@keyframes loading {
  0% {
      opacity: 0.2;
      transform: rotate(0deg);
  }
  50% {
      opacity: 0.8;   
  }
  100% {
      opacity: 0.2;
      z-index: -100;
      transform: rotate(360deg);
  }
}
</style>