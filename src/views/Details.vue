<template>
    <div>
        <h1>goods</h1>
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
}
</script>
