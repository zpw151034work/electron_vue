
<template>
   <Home></Home>
</template>
    
<script setup>
  import {ref} from "vue"
  import Home from './view/Home.vue'
    
</script>
    
<style lang='less'>
    //全局改变样式
    .el-popover.el-popper{
     min-width: 40px !important;
    }
    
</style>