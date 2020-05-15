<template>
  <div>
    <van-cell center title="暗黑模式">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup, Switch } from 'vant';

Vue.use(Cell).use(CellGroup).use(Switch);
export default {
  name: "Seeting",
  data() {
    return {
      checked: false
    }
  }
};
</script>

<style scoped>
</style>