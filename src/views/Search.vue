<template>
    <div style="background: #f5f5f5;padding-top: 20px;">
        <div class="goods-box">
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

export default{
    beforeRouteUpdate(to, from, next) {
        const foundGoodsString = to.query.foundGoods;

        if (foundGoodsString) {
        this.goodsList = JSON.parse(foundGoodsString);
        }

        next();
    },
    data() {
        return {
            goodsList: []
        }
    },
    mounted() {
        this.fetchSearchResults();
    },
    methods: {
        fetchSearchResults() {
            const foundGoodsString = this.$route.query.foundGoods;

            if (foundGoodsString) {
                this.goodsList = JSON.parse(foundGoodsString);
            }
        },
    },
    components: { MyList },
}
</script>
<style>
.goods-box{
    width: 1226px;
    margin: 0 auto;
}
.goods-list-g{
    display: inline-block;
    width: 1240px;
}
</style>