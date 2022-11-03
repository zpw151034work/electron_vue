<template>
    <div class="dialo-wrap">
        <div class="content">
            <div class="input">
                <input type="text" placeholder="">
            </div>
            <div class="btns">
                 <button>添加</button>
                 <button @click="transValue">取消</button>
            </div>
        </div>
    </div>    
</template>
    
<script setup >
    import {ref} from 'vue'
    const value = ref(false)
     // 使用defineEmits注册一个自定义事件
    const emit = defineEmits(["getDialogValue"])
     // 点击事件触发emit，去调用我们注册的自定义事件getValue,并传递value参数至父组件
     const transValue = () => {
       emit("getDialogValue", value.value)
    }



</script>
    
<style lang='stylus'>
 .dialo-wrap
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background: rgba(0,0,0,0.8)
    display: flex
    justify-content: center
    align-items: center
    .center
        width: 100%
        padding: 0 20px
        input
            height: 30px
            width: 100%
            outline: none
            margin-bottom: 10px
            font-size: 12px
            button
                height 30px
                margin-right: 10px
                font-size 12px
                padding: 0 20px
</style>