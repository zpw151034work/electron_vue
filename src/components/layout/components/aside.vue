<template>
  <div class="aside">
    <div class="menu">
      <el-menu default-active="b" class="el-menu-vertical-demo" :collapse="true" @open="handleOpen"
        @close="handleClose" @select="selectfFn">

        <el-menu-item index="a">
          <el-icon>
            <icon-menu/>
             <!-- <span>ww</span> -->
          </el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="b">
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="c">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="setting">
      <el-popover :visible="visible" placement="left-start" width="20" popper-class="popperClass">
        <div style="text-align: right; margin: 0">
          <div>
            <el-button size="small" type="primary" @click="visible = false">取消</el-button>
          </div>
          <div>
            <el-button size="small" type="primary" @click="logOut">退出</el-button>
          </div>
        </div>
        <template #reference>
          <el-icon @click="visible = true">
            <Setting />
          </el-icon>
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script  setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const isCollapse = ref(true)
const visible = ref(false)
const router = useRouter()
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const logOut = () => {
  router.push('/logIn')
}
const selectfFn =(index ) => {
  router.push('/'+index)
  console.log(index)
  
}
</script>
<style  lang='less'>
.aside {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid blue;

  .menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid blue;

    .menuItem {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #6cf;
    }

  }

  .setting {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

}
</style>
