<template>
  <div id="app">
    <el-container>
      <top-bar></top-bar>

      <el-header>
        <top-menu></top-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
      
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import TopMenu from '@/components/TopMenu'

export default {
  name: 'App',
  components: {
    TopBar,
    TopMenu
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
#app .el-header {
  padding: 0;
}
#app .el-main {
  min-height: 300px;
  padding: 20px 0;
}
#app .el-footer {
  padding: 0;
}
a,
a:hover {
  text-decoration: none;
}


</style>
