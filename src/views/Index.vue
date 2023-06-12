<template>
    <div>
        <TopBar :idList="idList"></TopBar>
        <TopMenu></TopMenu>
        <router-view></router-view>
        <BottomBar></BottomBar>
    </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import TopMenu from '@/components/TopMenu'
import BottomBar from '@/components/BottomBar'
import Vue from 'vue'

export default{
    components: {
        TopBar,
        TopMenu,
        BottomBar
    },
    data() {
        return {
            idList: Vue.prototype.GLOBAL.idList
        }
    },
}
</script>