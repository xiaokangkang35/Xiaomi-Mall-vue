<template>
    <div style="background: #f5f5f5;">
        <div class="goods-box">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item><router-link to="/goods">全部商品</router-link></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="goods-list">
                <div class="goods-list-box">
                    <ul class="goods-list-g">
                        <MyList :goodsList="goodsList"></MyList>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import MyList from '@/components/MyList.vue';
import Vue from 'vue'

export default{
  components: { MyList },
    data() {
        return {
            goodsList: Vue.prototype.GLOBAL.goodsList,
        }
    },
}
</script>
<style>
.goods-box{
    width: 1226px;
    margin: 0 auto;
}
.bread-crumb{
    display: flex;
    align-items: center;
    height: 40px;
}
.goods-list-g{
    display: inline-block;
    width: 1240px;
}
</style>