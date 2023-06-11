<template>
    <el-menu :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    router>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/images/logo/mi-logo.png" />
            </router-link>
        </div>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/goods">全部商品</el-menu-item>
        <el-menu-item index="/shopping">购物车</el-menu-item>

        <div class="search">
            <el-input placeholder="请输入搜索内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
    </el-menu>
</template>
<style>
.el-menu {
  max-width: 1225px;
  margin: 0 auto;
}
.logo img{
  height: 60px;
  width: 60px;
  float: left;
  margin: 0px 154px 20px 20px;
}
.search {
  margin-top: 10px;
  width: 300px;
  float: right;
}
</style>
<script>
    export default{
      created() {
        this.$watch('$route.path', (newPath, oldPath) => {
          this.activeIndex = newPath;
        });
      },
        data() {
            return {
                activeIndex: '/'
            }
        }
    }
</script>