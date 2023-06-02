<template>
    <div style="position: relative;">
        <div style="width: 1226px; margin: 0 auto;">
            <div style="margin-bottom: 20px;">
                <!-- 轮播图 -->
                <div class="carousel">
                    <el-carousel :interval="3000" height="460px" trigger="click">
                        <el-carousel-item  v-for="(item,index) in carousel" :key="index">
                            <img :src="item" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="left_nav_bar">
                    
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
                            <MyList></MyList>
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
                            <MyList></MyList>
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
        };
    },
    components: { MyList }
}
</script>

<style>
@import "../assets/css/index.css";
</style>