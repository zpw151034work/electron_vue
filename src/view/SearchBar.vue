<template>
     <div class="search-container">
        <div class="button" @click="transValue">+</div>
        <div class="input">
            <input type="text" placeholder="输入">
        </div>
     </div>   
</template>
    
<script setup >
   import {ref} from 'vue'
    const value = ref(true)
     // 使用defineEmits注册一个自定义事件
    const emit = defineEmits(["getSearchValue"])
     // 点击事件触发emit，去调用我们注册的自定义事件getValue,并传递value参数至父组件
    const transValue = () => {
       emit("getSearchValue", value.value)
    } 
</script>
    
<style lang='stylus'>
   div.search-container
    height: 60px
    background: #d3d3d3;  
    display: flex;
    align-items: center;
    justify-content: center;
    .button
        width: 40px;
        height: 40px;
        background-color: #6cf;
        border-radius: 5px;
        padding-left: 0;
        font-size: 30px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
        cursor:pointer;
    .input
        flex: 1;
        height: 36px;
        padding:0 10px;
        input
            height: 100%;
            width:90%;
            border: solid 1px #ccc
            border-radius: 5px;
            padding: 0 10px;
    
</style>