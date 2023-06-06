<template>
    <div class="shopping-main">
        <div class="container">
            <div class="cart-wrap">
                <div class="cart-goods-list">
                    <div class="list-head">
                        <div class="col-check">
                            <el-checkbox v-model="isAllCheck">全选</el-checkbox>
                        </div>
                        <div class="col-img">&nbsp;</div>
                        <div class="col-name">商品名称</div>
                        <div class="col-price">单价</div>
                        <div class="col-num">数量</div>
                        <div class="col-total">小计</div>
                        <div class="col-action">操作</div>
                    </div>
                    <div class="list-body">
                        <div class="list-item">
                            <div class="item-box">
                                <ul>
                                    <li v-for="(item,index) in foundObjects" :key="item.goodsId">
                                        <div class="goods-check">
                                            <el-checkbox :value="item.check" @change="checkChange($event,index)"></el-checkbox>
                                        </div>
                                        <div class="goods-img">
                                            <img :src="item.shoppingImg" alt="">
                                        </div>
                                        <div class="goods-name">
                                            {{ item.title }}
                                        </div>
                                        <div class="goods-price">
                                            {{ item.price }}元
                                        </div>
                                        <div class="goods-num">
                                            <el-input-number v-model="item.num" @change="handleChange" :min="1" :max="10"></el-input-number>
                                        </div>
                                        <div class="goods-total">
                                            {{ item.price * item.num }}元
                                        </div>
                                        <div class="goods-action">
                                            <i class="el-icon-close" @click="del(item.goodsId)"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default{
    data() {
        return {
            isAllCheck: false,
            foundObjects: []
        }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      del(item){
        console.log(item)
        var ind = this.foundObjects.findIndex(value => value.id === item);
        this.foundObjects.splice(ind, 1)
      },
      
    },
    computed: {
        foundGoods() {
            const idList = Vue.prototype.GLOBAL.idList;
            return Vue.prototype.GLOBAL.goodsList.filter(obj => idList.includes(obj.goodsId))
        }
    },
    created(){
        this.foundObjects = this.foundGoods
    }
}
</script>
<style>
.shopping-main{
    padding: 38px 0;
    background: #f5f5f5;
}
.shopping-main .container{
    width: 1226px;
    margin: 0 auto;
}
.cart-goods-list{
    background-color: #fff;
}
.cart-goods-list .list-head{
    height: 70px;
    line-height: 70px;
    padding-right: 26px;
    color: #424242;
}
.cart-goods-list .list-head div{
    float: left;
}
.cart-goods-list .list-head .col-check{
    width: 110px;
    text-align: center;
}
.cart-goods-list .list-head .col-img{
    width: 120px;
}
.cart-goods-list .list-head .col-name{
    width: 380px;
}
.cart-goods-list .list-head .col-price{
    width: 140px;
    padding-right: 18px;
    text-align: center;
    color: #424242;
}
.cart-goods-list .list-head .col-num{
    width: 150px;
    text-align: center;
    color: #424242;
}
.cart-goods-list .list-head .col-total{
    width: 120px;
    padding-right: 81px;
    text-align: right;
}
.cart-goods-list .list-head .col-action{
    width: 80px;
    text-align: center;
}
.list-body .list-item .item-box{
    padding: 15px 26px 15px 0;
}
.list-body .list-item .item-box ul li{
    width: 1226px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    padding-top: 10px;
}
.goods-check{
    width: 110px;
    text-align: center;
}
.goods-img{
    width: 80px;
    height: 80px;
    padding-right: 40px;
    overflow: hidden;
}
.goods-name{
    width: 380px;
}
.goods-price{
    width: 140px;
    padding-right: 18px;
    text-align: center;
    color: #424242;
}
.goods-num{
    width: 150px;
    text-align: center;
    color: #424242;
}
.goods-total{
    width: 135px;
    padding-right: 81px;
    text-align: right;
    color: #ff6700;
    font-size: 16px;
}
.goods-action{
    width: 50px;
    text-align: center;
}
</style>