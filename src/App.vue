<template>
  <div id="app" style="height: 100%;">
        <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import TopMenu from '@/components/TopMenu'
import MyList from '@/components/MyList'
import BottomBar from '@/components/BottomBar'
import Vue from 'vue'

export default {
  name: 'App',
  data() {
    return {
      idList: Vue.prototype.GLOBAL.idList
    }
  },
  components: {
    TopBar,
    TopMenu,
    MyList,
    BottomBar,
  }
}
</script>

<style>
/* 定义全局css */
* {
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}
a,
a:hover {
  text-decoration: none;
}
</style>
