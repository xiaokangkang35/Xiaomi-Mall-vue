<template>
    <div class="shopping-main">
        <div class="container">
            <div class="cart-wrap">
                <div class="cart-goods-list">
                    <div class="list-head">
                        <div class="col-check">
                            <el-checkbox :indeterminate="isIndeterminate" v-model="isCheckAll" @change="CheckAllChange">全选</el-checkbox>
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
                                            <el-checkbox :value="item.check" @change="CheckChange(index)"></el-checkbox>
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
            <div class="cart-bar">
                <div class="section-left">
                    <router-link to="/">继续购物</router-link>
                    <span class="total">已选择 {{ selectedCheckboxCount }} 件</span>
                </div>
                <div class="section-right">
                    合计:
                    <em style="font-style: normal;font-size: 30px;">{{ selectedTotalPrice }}</em>
                    元
                    <el-button style="height: 50px; width: 200px; margin-left: 50px;padding-top: 16px;" type="">去结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default{
    data() {
        return {
            isCheckAll: false,
            foundObjects: [],
            isIndeterminate: false,
        }
    },
    methods: {
        handleChange(value) {
            
        },
        del(item){
            var ind = this.foundObjects.findIndex(value => value.id === item);
            this.foundObjects.splice(ind, 1)
        },
        CheckAllChange() {
            const checked = this.isCheckAll;
            this.foundObjects.forEach(item => {
            item.check = checked;
            });
            this.updateCheckAllStatus();
        },
        CheckChange(index) {
            const currentItem = this.foundObjects[index];
            currentItem.check = !currentItem.check;
            this.updateCheckAllStatus();
        },
        updateCheckAllStatus() {
            const selectedCount = this.foundObjects.filter(item => item.check).length;
            this.isCheckAll = selectedCount === this.foundObjects.length;
            this.isIndeterminate = selectedCount > 0 && selectedCount < this.foundObjects.length;
            if (this.foundObjects.length === 0) {
                this.isCheckAll = false;
                this.isIndeterminate = false;
            }
        },
    },
    computed: {
        foundGoods() {
            const idList = Vue.prototype.GLOBAL.idList;
            return Vue.prototype.GLOBAL.goodsList.filter(obj => idList.includes(obj.goodsId));
        },
        selectedTotalPrice() {
            return this.foundGoods.reduce((total, item) => {
            if (item.check) {
                return total + item.price * item.num;
            }
            return total;
            }, 0);
        },
        selectedCheckboxCount() {
            const length = this.foundGoods.filter(item => item.check).length;
            return length;
        },
    },
    created(){
        this.foundObjects = this.foundGoods
    },
    watch: {
        foundObjects: {
            handler: 'updateCheckAllStatus',
            deep: true
        }
    },
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
.cart-bar{
    height: 50px;
    margin: 20px 0;
    background-color: #fff;
}
.cart-bar .section-left{
    float: left;
    height: 50px;
    line-height: 50px;
}
.cart-bar .section-left a{
    margin-left: 32px;
    color: #757575;
}
.cart-bar .section-left .total{
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
    color: #757575;
}
.cart-bar .section-right{
    float: right;
}
</style>