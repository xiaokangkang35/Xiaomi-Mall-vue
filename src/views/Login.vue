<template>
    <div class="container">
            <div class="login-wrapper">
                <div class="header">Login</div>
                <div class="form-wrapper">
                    <el-input v-model="username" placeholder="username" @input="handleUsernameInput"></el-input>
                    <el-input v-model="password" placeholder="password" @input="handlePasswordInput" show-password style="margin-top: 40px;"></el-input>
                    <div class="btn" @click="loginBtn">
                        Login
                    </div>
                </div>
            </div>
        </div>
</template>
 
<script>
import { debounce, throttle } from 'lodash';
export default{
    name:"Login",
    data() {
        return {
            username: '',
            password: '',
            state1 : false,
            state2 : false,
        }
    },
    methods: {
        handleUsernameInput: debounce(function () {
            console.log('Username changed:', this.username);
            if (this.username === 'zikang') {
                this.state1 = true
                console.log(this.state1)
            }
        }, 1000),
        handlePasswordInput: debounce(function () {
            console.log('Password changed:', this.password);
            if (this.password === '123456') {
                this.state2 = true
                console.log(this.state2)
            }
        }, 1000),

        loginBtn() {
            if (this.state1 == true && this.state2 ==true) {
                this.$router.push({path: '/home'})
            } else {
                this.$message({
                    showClose: true,    
                    message: '账号或密码错误'
                });
            }
        }

    }
}
</script>
 
<style scoped>
 
html {
    height: 100%;
}
body {
    height: 100%;
}
.container {
    /* margin-top: 5%; */
    height: 980px;
    width: 100%;
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
    background-color: #fff;
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}
.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}
.input-item:placeholder {
    text-transform: uppercase;
}
.btn {
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: #fff;
}
.msg {
    text-align: center;
    line-height: 88px;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
}
 
</style>