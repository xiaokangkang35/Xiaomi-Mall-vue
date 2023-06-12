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
            <el-input placeholder="请输入搜索内容" v-model="searchText">
              <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
            </el-input>
          </div>
    </el-menu>
</template>
<script>
import Vue from 'vue';
export default{
  data() {
      return {
          activeIndex: '/',
          searchText: '',
          goods: Vue.prototype.GLOBAL.goodsList
      }
  },
  methods: {
    handleSearch() {
      console.log(this.searchText);
      const keyword = this.searchText.trim();
      if (keyword === '') {
        console.log('请输入搜索关键字');
        return;
      }
      const foundGoods = this.goods.filter((item) =>
        item.title.includes(keyword)
      );
      this.searchText = '';
      const routeData = {
        path: '/search',
        query: {
          foundGoods: JSON.stringify(foundGoods),
        },
      };
      try {
        // 检查当前路由是否与目标路由相同
        if (
          this.$route.path === routeData.path &&
          JSON.stringify(this.$route.query) === JSON.stringify(routeData.query)
        ) {
          throw new Error('重复导航');
        }
        this.$router.push(routeData);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.$watch('$route.path', (newPath, oldPath) => {
      this.activeIndex = newPath;
    });
  },
  
}
</script>
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
