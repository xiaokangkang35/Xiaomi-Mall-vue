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
            intro: "天玑 8200-Ultra 旗舰芯｜ LCD 护眼屏｜ 12GB + 512GB 超大存储｜ 5080mAh 超大电量 + 67W 旗舰闪充｜ 6400万像素快拍相机｜ 潮流小立边设计｜ 小金刚品质 坚固耐用",
            price: "1559",
            detailsImg: [
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.71616051.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.69956639.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.69331585.png"
            ],
            isDiscount: false
        },
        {
            goodsId: 2,
            imgUrl: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305241112_ecb14876904f09f3cbc605350a02eff0.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Xiaomi Civi 3",
            desc: "仿生双眸 天生出色",
            intro: "双生双色设计 | 前置仿生双主摄 | 原生质感人像 | 超轻薄好手感 | 天玑8200-Ultra高性能处理器 | 4500mAh大电池",
            price: "2499",
            detailsImg: ["https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1684926185.82863087.png"],
            isDiscount: false
        },
        {
            goodsId: 3,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/555070388ddc76c4de4b2c42b12c3c1d.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Xiaomi 13 Ultra",
            desc: "徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式",
            intro: "徕卡光学全焦段四摄| 一英寸可变光圈| 徕卡专业街拍模式| 第二代骁龙8｜2K OLED 屏幕｜5000mAh大电量｜90W 小米澎湃有线秒充｜50W Pro 小米澎湃无线秒充",
            price: "5999",
            detailsImg: [
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681726094.73687921.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805069.68642151.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805071.89555963.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681805074.57094989.png"
            ],
            isDiscount: false
        },
        {
            goodsId: 4,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b046feca0a7bb3f7b961a9690babb1b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi Note 12 Turbo",
            desc: "狂暴引擎 超强性能释放",
            intro: "高通第二代骁龙7+ 性能芯",
            price: "1899",
            oldPrice: "1999",
            detailsImg: [
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.12241762.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.14646441.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.1181124.png",
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.11927388.png"
            ],
            isDiscount: true
        },
        {
            goodsId: 5,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6cec580260ceb20ae6a885c2c65c611.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K60",
            desc: "骁龙8+｜2K 高光直屏｜5500mAh+67W闪充",
            intro: "狠快狠强，狠旗舰！2023，第一台梦幻手机",
            price: "2299",
            oldPrice: "2699",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 6,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f37dd30477e7ba040c7fb69c31ad8bf3.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi K60 Pro",
            desc: "【第二代骁龙8】狂暴引擎",
            intro: "第二代骁龙8丨2K 高光屏丨VC 液冷散热丨索尼IMX800 大底相机+小米影像大脑2.0丨OIS光学防抖丨120W神仙秒充+30W无线秒充丨5000mAh大电量丨屏下指纹解锁",
            price: "2899",
            oldPrice: "3599",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 7,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212251443_29b17941a7365948446bd193011d9241.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Redmi Note 12 Pro 急速版",
            desc: "高通骁龙778G，OLED柔性直屏+一亿像素",
            intro: "Redmi Note 12 Pro 极速版",
            price: "1499",
            oldPrice: "1699",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 8,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "Xiaomi 13 限量定制色",
            desc: "全新第二代骁龙8｜徕卡专业光学镜头｜徕卡原生双画质 | 6.36″超窄边屏幕｜67W小米澎湃秒充｜徕卡75mm长焦镜头",
            intro: "第二代骁龙8｜徕卡专业光学镜头｜徕卡原生双画质｜徕卡75mm长焦 | 超窄边屏幕｜67W澎湃秒充",
            price: "1499",
            detailsImg: [],
            isDiscount: false
        },
        {
            goodsId: 10,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "小米电视6 65” OLED",
            desc: "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
            intro: "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
            price: "5999",
            oldPrice: "6999",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 11,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "小米电视6 至尊版 65英寸",
            desc: "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
            intro: "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
            price: "6899",
            oldPrice: "7999",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 12,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/388b13bf52ab0d6a56bc9f195b5f1dd5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "小米电视 ES55 2022款",
            desc: "多分区背光 | MEMC动态补偿 | 杜比视界",
            intro: "多分区背光 | MEMC动态补偿 | 杜比视界",
            price: "2299",
            oldPrice: "2999",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 13,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/21429638bdd453e8c1cb5c357ff4835b.png?thumb=1&w=200&h=200&f=webp&q=90",
            title: "巨省电 小米空调 1.5匹新1级能效",
            desc: "强劲制冷 | 高效节能 | 智能互联",
            intro: "强劲制冷 | 高效节能 | 智能互联",
            price: "1999",
            oldPrice: "2499",
            detailsImg: [],
            isDiscount: true
        },
        {
            goodsId: 14,
            imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=200&h=200&f=webp&q=90",
            title: "米家新风空调 立式3匹",
            desc: "全屋快通风，就要大新风",
            intro: "全屋快通风，就要大新风",
            price: "6699",
            oldPrice: "7999",
            detailsImg: [],
            isDiscount: true
        },
    ];

export default{
    carousel,
    threeImg,
    goodsList,
}
</script>