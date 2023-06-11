<!-- 顶部导航栏 -->
<template>
    <div class="topBar">
        <div class="nav">
            <ul>
                <li>
                    <el-button type="text">登录</el-button>
                    <span class="sep">|</span>
                    <el-button type="text">注册</el-button>
                </li>
                <li>
                    <router-link to="">消息通知</router-link>
                </li>
                <li class="shopCart">
                    <router-link to="/shopping">
                        <i class="el-icon-shopping-cart-2"> </i>  购物车
                        <span>({{ idList.length }})</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
  props:{
    idList: [],
  },
}
</script>
<style>
.topBar {
  height: 40px;
  background-color: #3d3d3d;
  margin-bottom: 20px;
}
.topBar .nav {
  width: 1225px;
  margin: 0 auto;
}
.topBar .nav ul {
  float: right;
}
.topBar .nav li {
  float: left;
  height: 40px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}
.topBar .nav .sep {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 5px;
}
.topBar .nav li .el-button {
  color: #b0b0b0;
}
.topBar .nav .el-button:hover {
  color: #fff;
}
.topBar .nav li a{
    color: #b0b0b0;
}
.topBar .nav li a:hover{
    color: #fff;
    cursor: pointer;
}
.topBar .nav .shopCart{
    width: 120px;
    background: #424242;
}
.topBar .nav .shopCart:hover{
    background: #fff;
}
.topBar .nav .shopCart:hover a{
    color: #ff6700;
}

</style>