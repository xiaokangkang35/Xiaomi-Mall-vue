<template>
  <div id="app">
        <top-bar></top-bar>
        <top-menu></top-menu>
        <router-view></router-view>
        <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import TopMenu from '@/components/TopMenu'
import MyList from '@/components/MyList'
import BottomBar from '@/components/BottomBar'

export default {
  name: 'App',
  components: {
    TopBar,
    TopMenu,
    MyList,
    BottomBar
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
