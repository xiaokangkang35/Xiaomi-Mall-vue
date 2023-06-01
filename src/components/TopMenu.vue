<template>
    <el-menu :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    router>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/images/header/mi-logo.png" alt />
            </router-link>
        </div>
    </el-menu>
</template>
<style>

</style>
<script>
    export default{
        data() {
            return {
                activeIndex: ''
            }
        }
    }
</script>