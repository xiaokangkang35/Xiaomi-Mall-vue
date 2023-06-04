<template>
    <div style="background: #f5f5f5;">
        <div class="goods-box">
            <div class="bread-crumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                    <el-breadcrumb-item>全部商品</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="goods-list">
                <div class="goods-list-box">
                    <ul class="goods-list-g">
                        <MyList :goodsList="phoneList"></MyList>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import MyList from '@/components/MyList.vue';
export default{
  components: { MyList },
    data() {
        return {
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
                {
                    goodsId: 6,
                    imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/555070388ddc76c4de4b2c42b12c3c1d.png?thumb=1&w=200&h=200&f=webp&q=90",
                    title: "Xiaomi 13 Ultra",
                    desc: "徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式",
                    price: "5999",
                    isDiscount: false
                },
            ],
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