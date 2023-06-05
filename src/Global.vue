<script>
const carousel= [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ebf4e8a802e83122cfc87909038f66c.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69d4b845cf7409fff4ede9bb31e25643.jpg?thumb=1&w=1839&h=690&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f53c1c4acd337833d0adab19e66aefcc.jpg?thumb=1&w=1839&h=690&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66eff8e22a48ded4854017b25cbf631.jpeg?thumb=1&w=1839&h=690&f=webp&q=90"
    ];
const threeImg = [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb00b61ce69d70cfd65f2a0aaa2c3b90.jpg?w=632&h=340",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6dd2f3e0de4e6cbba98fd3799cfa5bf7.jpg?w=632&h=340",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cf5e958bc88727b50c5c5fba7a8f47a.jpg?w=632&h=340"
    ];
const goodsList = [
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
        {
            goodsId: 7,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6cec580260ceb20ae6a885c2c65c611.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K60",
            desc: "骁龙8+｜2K 高光直屏｜5500mAh+67W闪充",
            price: "2299",
            oldPrice: "2699",
            isDiscount: true
        },
        {
            goodsId: 10,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "小米电视6 65” OLED",
            desc: "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
            price: "5999",
            oldPrice: "6999",
            isDiscount: true
        },
        {
            goodsId: 11,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&w=300&h=300&f=webp&q=90",
            title: "小米电视6 至尊版 65英寸",
            desc: "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
            price: "6899",
            oldPrice: "7999",
            isDiscount: true
        },
        {
            goodsId: 12,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&w=300&h=300&f=webp&q=90",
            title: "小米电视6 至尊版 65英寸",
            desc: "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
            price: "6899",
            oldPrice: "7999",
            isDiscount: true
        },
        {
            goodsId: 13,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&w=300&h=300&f=webp&q=90",
            title: "小米电视6 至尊版 65英寸",
            desc: "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
            price: "6899",
            oldPrice: "7999",
            isDiscount: true
        },

    ];

export default{
    carousel,
    threeImg,
    goodsList,
}
</script>