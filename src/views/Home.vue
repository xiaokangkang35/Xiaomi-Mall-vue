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
                    <ul></ul>
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
                            <MyList :goodsList="phoneList"></MyList>
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
                            <MyList :goodsList="eleList"></MyList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 200px;">

        </div>
    </div>
</template>

<script lang="ts">
import MyList from '@/components/MyList.vue';

export default{
    data() {
        return {
            carousel: [
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ebf4e8a802e83122cfc87909038f66c.jpg?w=2452&h=920",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69d4b845cf7409fff4ede9bb31e25643.jpg?thumb=1&w=1839&h=690&f=webp&q=90",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f53c1c4acd337833d0adab19e66aefcc.jpg?thumb=1&w=1839&h=690&f=webp&q=90",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66eff8e22a48ded4854017b25cbf631.jpeg?thumb=1&w=1839&h=690&f=webp&q=90"
            ],
            threeImg: [
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb00b61ce69d70cfd65f2a0aaa2c3b90.jpg?w=632&h=340",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6dd2f3e0de4e6cbba98fd3799cfa5bf7.jpg?w=632&h=340",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cf5e958bc88727b50c5c5fba7a8f47a.jpg?w=632&h=340"
            ],
            phoneList: [
                {
                    goodsId: 1,
                    imgUrl: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305291422_e96776c7e1e35cebb454457c3344d3cd.png?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Redmi Note 12T Pro",
                    desc: "年代LCD屏幕之光",
                    price: "1559",
                    isDiscount: false
                },
                {
                    goodsId: 2,
                    imgUrl: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305241112_ecb14876904f09f3cbc605350a02eff0.png?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Xiaomi Civi 3",
                    desc: "仿生双眸 天生出色",
                    price: "2499",
                    isDiscount: false
                },
                {
                    goodsId: 3,
                    imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/555070388ddc76c4de4b2c42b12c3c1d.png?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Xiaomi 13 Ultra",
                    desc: "徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式",
                    price: "5999",
                    isDiscount: false
                },
                {
                    goodsId: 4,
                    imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Redmi Note 12 Turbo",
                    desc: "狂暴引擎 超强性能释放",
                    price: "1899",
                    oldPrice: "1999",
                    isDiscount: true
                },
                {
                    goodsId: 5,
                    imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6cec580260ceb20ae6a885c2c65c611.png?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Redmi K60",
                    desc: "骁龙8+｜2K 高光直屏｜5500mAh+67W闪充",
                    price: "2299",
                    oldPrice: "2699",
                    isDiscount: true
                },
            ],
            eleList: [
                {
                    goodsId: 1,
                    imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "小米电视6 65” OLED",
                    desc: "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
                    price: "5999",
                    oldPrice: "6999",
                    isDiscount: true
                },
            ]
        };
    },
    components: { MyList }
}
</script>

<style>
@import "../assets/css/index.css";
</style>