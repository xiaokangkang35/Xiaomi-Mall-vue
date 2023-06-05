<template>
    <div style="position: relative;">
        <div style="width: 1226px; margin: 0 auto;">
            <div style="margin-bottom: 20px;">
                <!-- 轮播图 -->
                <div class="carousel">
                    <el-carousel :interval="3000" height="460px" trigger="click">
                        <el-carousel-item v-for="(item,index) in carousel" :key="index">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="left_nav_bar">
                    <ul>
                        <li v-for="(item,index) in leftNav" :key="index">
                            <router-link to>
                                <div>
                                    {{ item }}
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 服务列表 -->
            <div class="home_sub">
                <div class="list">
                    <ul>

                    </ul>
                </div>
                <div class="img_list">
                    <ul>
                        <li v-for="(item,index) in threeImg" :key="index">
                            <img :src="item" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="goods_list_box">
            <div class="goods_list">
                <div class="home_banner">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bc6d451c1c263546e09d3afbbf4fc73.png?thumb=1&w=1839&h=180&f=webp&q=90" alt="">
                </div>

                <div class="phone">
                    <div class="box_header">
                        <div class="title">手机</div>
                    </div>
                    <div class="box_goods">
                        <div class="img_list">
                            <ul class="one">
                                <li>
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5d3a59f7b53c23feab77434aa1f383b.jpg?thumb=1&w=351&h=921&f=webp&q=90" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="list">
                            <div class="goods-list-box">
                                <ul class="goods-list">
                                    <MyList :goodsList="phoneList"></MyList>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="household_appliances">
                    <div class="box_header">
                        <div class="title">家电</div>
                    </div>
                    <div class="box_goods">
                        <div class="img_list">
                            <ul class="two">
                                <li>
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90" alt="">
                                </li>
                                <li>
                                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65e186001431a799d30fa84359f4b84e.jpg?thumb=1&w=351&h=450&f=webp&q=90" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="list">
                            <div class="goods-list-box">
                                <ul class="goods-list">
                                    <MyList :goodsList="eleList"></MyList>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 10px;">
            </div>
        </div>
    </div>
</template>

<script>
import MyList from '@/components/MyList.vue';
import Vue from 'vue';

export default{
    data() {
        const phoneList = Vue.prototype.GLOBAL.goodsList.filter(item => item.goodsId >= 1 && item.goodsId <= 7);
        const eleList = Vue.prototype.GLOBAL.goodsList.filter(item => item.goodsId >= 10 && item.goodsId <= 16);
        return {
            carousel: Vue.prototype.GLOBAL.carousel,
            threeImg: Vue.prototype.GLOBAL.threeImg,
            phoneList: phoneList,
            eleList: eleList,
            leftNav: ["手机","电视","家电","笔记本 平板","出行 穿戴","耳机 音箱","健康 儿童","生活 箱包","智能 路由器","电源 配件"]
        };
    },
    components: { MyList }
}
</script>

<style>
@import "../assets/css/index.css";

.goods-list-box .goods-list{
    width: 993px;
    height: 614px;
}
</style>