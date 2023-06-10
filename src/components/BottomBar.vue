<template>
    <div class="footer-box">
        <div class="footer-service">
            <ul class="list-service">
                <li>
                    <i class="el-icon-takeaway-box"></i>预约维修服务
                </li>
                <li>
                    <i class="el-icon-takeaway-box"></i>7天无理由退货
                </li>
                <li>
                    <i class="el-icon-takeaway-box"></i>15天免费换货
                </li>
                <li>
                    <i class="el-icon-takeaway-box"></i>满69元包邮
                </li>
                <li>
                    <i class="el-icon-takeaway-box"></i>1100余家售后网点
                </li>
            </ul>
        </div>
        <div class="footer-link">
            <dl class="col-links col-links-first">
                <dt></dt>
            </dl>
            <dl class="col-links" v-for="(item,index) in footer" :key="index">
                <dt>{{item.title}}</dt>
                <dd v-for="(item1,content_index) in item.content" :key="content_index">{{ item1 }}</dd>
            </dl>

            <div class="col-contact">
                <p>***</p>
                <p>************</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            footer: [
            {
                title: "选购指南",
                content: ["手机","电视","笔记本","平板","穿戴","耳机","家电","路由器","音箱","配件"]
            },
            {
                title: "服务中心",
                content: ["申请售后","售后政策","维修服务价格","订单查询","以旧换新","保障服务","防伪查询","F码通道"]
            },
            {
                title: "线下门店",
                content: ["小米之家","服务网点","授权体验店/专区"]
            },
            {
                title: "关于小米",
                content: ["了解小米","加入小米","投资者关系","可持续发展","廉洁举报"]
            },
            {
                title: "关注我们",
                content: ["新浪微博","官方微信","联系我们","公益基金会"]
            },
            ]
        }
    },
}
</script>
<style>
.footer-box{
    width: 1226px;
    margin: 0 auto;
}
.footer-box .footer-service{
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
}
.list-service{
    margin: 0;
    padding: 0;
}
.list-service li:first-child{
    border-left: 0;
}
.list-service li{
    color: #616161;
    display: inline-block;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
}
.list-service li i{
    margin-right: 6px;
    font-size: 24px;
    line-height: 24px;
}
.footer-box .footer-link{
    padding: 40px 0;
}
.footer-link .col-links{
    display: inline-table;
    width: 160px;
    margin: 0;
}
.footer-link .col-links dt{
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}
.footer-link .col-links dd{
    margin: 10px 0 0;
    font-size: 12px;
    color: #757575;
}
.footer-link .col-contact{
    float: right;
    width: 251px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
}
</style>