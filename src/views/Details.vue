<template>
    <div id="details">
        <div class="page-header">
            <div class="title">
                <p>{{goodsDetails[0].title}}</p>
                <div class="list">
                <ul>
                    <li>
                    <router-link to>概述</router-link>
                    </li>
                    <li>
                    <router-link to>参数</router-link>
                    </li>
                    <li>
                    <router-link to>用户评价</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div class="page-main">
            <div class="img">
                <el-carousel trigger="click" height="560px">
                    <el-carousel-item v-for="item in goodsDetails[0].detailsImg" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="content">
                <h1 class="title">{{ goodsDetails[0].title }}</h1>
                <p class="intro">{{ goodsDetails[0].intro }}</p>
                <p class="store">小米自营</p>
                <div class="price-info">
                    <span>{{ goodsDetails[0].price }}元</span>
                    <del class="old-price" v-if="goodsDetails[0].isDiscount">
                        <span >{{ goodsDetails[0].oldPrice }}元</span>
                    </del>
                </div>
                <div class="line"></div>
                <div style="height: 200px;">

                </div>
                <div class="button">
                    <el-button type="shop-cart" @click="addShopping(goodsId)">加入购物车</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default{
    data() {
        let goods_Id = this.$route.query.goodsId;
        const goodsDetails = Vue.prototype.GLOBAL.goodsList.filter(item => item.goodsId == goods_Id);
        return {
            goodsId : goods_Id,
            goodsDetails: goodsDetails
        }
    }, 
    methods:{
        addShopping(value) {
            if (Vue.prototype.GLOBAL.idList.includes(value)) {
                this.$router.push({ path: "/shopping" });
            } else {
                Vue.prototype.GLOBAL.idList.push(value);
                this.$router.push({ path: "/shopping" });
            }
        }
    },
}
</script>

<style>
#details .page-header {
  height: 64px;
  z-index: 4;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
}
#details .page-header .title {
  width: 1225px;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  font-weight: 400;
  color: #212121;
  margin: 0 auto;
}
#details .page-header .title p {
  float: left;
}
#details .page-header .title .list {
  height: 64px;
  float: right;
}
#details .page-header .title .list li {
  float: left;
  margin-left: 20px;
}
#details .page-header .title .list li a {
  font-size: 14px;
  color: #616161;
}
#details .page-header .title .list li a:hover {
  font-size: 14px;
  color: #ff6700;
}
#details .page-main{
    width: 1225px;
    height: 560px;
    padding-top: 30px;
    margin: 0 auto;
    border-bottom: 1px solid #e0e0e0;
}
#details .page-main .img{
    float: left;
    width: 560px;
    height: 560px;
}
#details .page-main .img img{
    height: 560px;
    width: 560px;
}
#details .page-main .content{
    float: left;
    margin-left: 25px;
    width: 640px;
}
.page-main .content .title{
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 400;
    color: #212121;
}
.page-main .content .intro{
    color: #b0b0b0;
    margin: 0;
    padding: 0;
    padding-top: 8px;
    line-height: 1.5;
}
.page-main .content .store{
    color: #ff6700;
    margin-top: 14px;
}
.page-main .content .price-info{
    display: block;
    font-size: 18px;
    line-height: 1;
    color: #ff6700;
    padding: 12px 0 10px;
}
.page-main .content .price-info .old-price{
    font-size: 14px;
    margin-left: 5px;
    color: #b0b0b0;
}
.line{
    margin-top: 12px;
    border-bottom: 1px solid #e0e0e0;
}
</style>