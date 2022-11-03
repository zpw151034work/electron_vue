<template>
    <div class="header"
        @mousedown="mousedown"
        >
        <div class="name">
            管理系统开发
        </div>
        <div class="operation">
            <i class="iconfont icon-jianhao" @click="hideWindow">隐藏</i>
            <i class="iconfont icon-window" @click="toggleWindowSize">全屏</i>
            <i class="iconfont icon-guanbi1" @click="minWindow">最小化</i>
            <i class="iconfont icon-guanbi1" @click="closeWindow">关闭</i>
            <i class="iconfont icon-guanbi1" @click="restoreWindow">恢复</i>
            
        </div>
    </div> 
</template>
   
<script setup >
  import {ref} from 'vue'
  const ipcRenderer = require('electron').ipcRenderer;
//  import { ipcRenderer } from 'electron'
//  const { ipcRenderer } = require('electron');
   const value = ref(true)
   const isKeyDown = ref(true)
   const dinatesX = ref(0)
   const dinatesY = ref(0)
    // 使用defineEmits注册一个自定义事件
   const emit = defineEmits(["getSearchValue"])
    // 点击事件触发emit，去调用我们注册的自定义事件getValue,并传递value参数至父组件
   const transValue = () => {
      emit("getSearchValue", value.value)
   }
   //隐藏窗口  
   const hideWindow=()=>{
    ipcRenderer.send('window-min')

   }
   //窗口最大化
   const toggleWindowSize=()=>{
    ipcRenderer.send('window-max')

   }
   //关闭窗口
   const closeWindow=()=>{
    ipcRenderer.send('window-close')

   }
   //最小化
   const minWindow = () => {
    ipcRenderer.send('window-minimize')
   }
   //恢复
   const restoreWindow = () => {
    ipcRenderer.send('window-restore')
   }
   //拖动
   const mousedown = (e)=>{
       isKeyDown.value = true 
       dinatesX.value = e.x
       dinatesY.value = e.y
        
      document.onmousemove = (ev) => {
          if(isKeyDown.value){
            const x = ev.screenX - dinatesX.value
            const y = ev.screenY - dinatesY.value
            // 给主进程传入坐标
            ipcRenderer.send('move-application',{
                appX:x,
                appY:y
              })
          }
      };
      document.onmouseup = (ev) => {
          isKeyDown.value= false
      };
   }
</script>
   
<style lang='stylus'>
  .header
    width: 100%
    display:flex
    align-items: center
    justify-content: space-between
    height: 50px
    border:1px solid red;
    .name
        color #000
        font-weight: bold
        font-size: 30px
    .operation
        width:15%
        display: flex
        justify-content:space-around
        align-items: center
        .iconfont
            width: 40px;
            height 40px
            border-radius: 50%
            background:#666;
            line-height: 40px
            text-align: center
            color: #fff;
            
            
</style>