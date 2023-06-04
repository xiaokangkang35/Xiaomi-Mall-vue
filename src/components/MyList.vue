<template>
    <div>
        <li class="goods-list-li" v-for="(item,index) in goodsList" :key="index">
            <router-link :to="{path: '/goods/details', query: {goodsId : item.goodsId}}" class="goods">
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <h3 class="title">{{ item.title }}</h3>
                <p class="desc">{{item.desc}}</p>
                <p class="price">
                    <span>{{ item.price }}</span>元<span>起</span>
                    <del v-if="item.isDiscount">
                        <span>{{ item.oldPrice }}</span>元
                    </del>
                </p>
            </router-link>
        </li>
    </div>
</template>
<script>
    export default{
        props:{
            goodsList: [],
        },
        data() {
            return {
                
            }
        },
    }
</script>
<style>
.goods-list-li{
    float: left;
    width: 234px;
    height: 300px;
    padding: 0;
    margin: 0px 0px 14px 14px;
    background: #fff;
    transition: all .2s linear;
}
.goods-list-li:hover{
    z-index: 2;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0)
}
.g a{
    display: block;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0;
}
.img{
    width: 160px;
    height: 160px;
    margin: 0 auto 18px;
}
.img img{
    width: 160px;
    height: 160px;
}
.title{
    margin: 0 10px 2px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
}
.desc{
    margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    color: #b0b0b0;
}
.title,
.desc{
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.price{
    font-size: 14px;
    margin: 0 10px 14px;
    text-align: center;
    color: #ff6700;
}

.price del{
    margin-left: 0.5em;
    color: #b0b0b0;
}

</style>