<template>
   <Header></Header>
   <div class="main">
      <div class="mainLf" >
         <Aside></Aside>
      </div>
      <div class="mainRg">
         <transition name="fade" mode="out-in">
            <router-view></router-view>
         </transition>
      </div>
   </div>

</template>

<script setup >
import Aside from './components/aside.vue'
import Header from "../../components/Header.vue"
</script>
<style lang='stylus'>
  .main
    height:calc(100vh - 80px)
    width: 100%
    display: flex
    flex-direction:row
    border:1px solid red
    justify-content: space-between
    align-items: center
    .mainLf
      height: 100%
      width: 65px
    .mainRg
      height:100%
      width: 90%
      flex-grow: 1
</style>