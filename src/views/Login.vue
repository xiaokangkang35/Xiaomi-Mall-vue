<template>
    <div class="login-box">
        <div class="login-left-img">
            <div class="leftImg"></div>
        </div>
        <div class="login-main">
            <div class="login-main-header">
                <div class="login-title">
                    <img src="../assets/images/logo/mi-logo.png" alt="">
                    <span>小米账号</span>
                </div>

            </div>
            <div class="login-main-container">
                <el-form :model="ruleForm">
                    <el-form-item>
                        <el-button type="primary"><router-link to="/">提交</router-link></el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            ruleForm:{

            }
        }
    },
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%
}
.login-box{
    height: 100%;
}
.login-box .login-left-img{
    height: 100%;
    float: left;
}
.login-box .login-left-img .leftImg{
    width: 375px;
    height: 100%;
    background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg");
    background-size: cover;
}
.login-box .login-main{
    height: 100%;
    margin-left: 375px;
}
.login-main .login-main-header{
    padding: 20px;
}
.login-main-header .login-title span{
    color: #333;
    font-size: 26px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
}
.login-main-header .login-title img{
    height: 40px;
    width: 40px;
}
.login-main-container{
    padding-top: 123px;
    height: 650px;
}
</style>