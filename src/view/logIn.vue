<template>
     <div class="login" @mousedown="mousedown">
          <div class="loginLf">

          </div>
          <div class="loginRg">
               <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="用户名" prop="user">
                         <el-input v-model="ruleForm.user" type="user" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                         <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item>
                         <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                         <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                    </el-form-item>
               </el-form>
               
          </div>
     </div>

</template>
    
<script setup >
import { useRouter } from 'vue-router';

import { reactive, ref } from 'vue'
const ipcRenderer = require('electron').ipcRenderer;
const isKeyDown = ref(true)
const dinatesX = ref(0)
const dinatesY = ref(0)
//拖动
const mousedown = (e) => {
     isKeyDown.value = true
     dinatesX.value = e.x
     dinatesY.value = e.y

     document.onmousemove = (ev) => {
          if (isKeyDown.value) {
               const x = ev.screenX - dinatesX.value
               const y = ev.screenY - dinatesY.value
               // 给主进程传入坐标
               ipcRenderer.send('move-application', {
                    appX: x,
                    appY: y
               })
          }
     };
     document.onmouseup = (ev) => {
          isKeyDown.value = false
     };
}
const router = useRouter()
const ruleFormRef = ref()
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  user:'',
  pass: '',
  checkPass: '',
})

const rules = reactive({
   user: [
    { message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      router.push('/a')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
    
<style  lang='stylus' >
  .login
     width: 100%
     height: calc(100vh - 20px)
     display: flex
     flex-direction: row
     justify-content: space-between
     align-items: center
     border:1px solid red
     .loginLf
          width: 60%
          height: 100%
          background:#79bbff
     .loginRg
          width: 50%
          height:100%
          display:flex
          flex-direction:row
          justify-content: center
          align-items: center
</style>