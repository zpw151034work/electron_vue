
<template>
    <main>
      <router-view>
      </router-view>
    </main>
</template>
    
<script setup >
import { ref,onMounted} from "vue"
import SearchBar from "./SearchBar.vue"
import Dialog from "./Dialog.vue"
import { useRouter } from 'vue-router';
 const router = useRouter()
onMounted(()=>{
    router.push('/logIn')
})
const sonMessage = ref(true)

const getDialogValue = (value) => {
    sonMessage.value = value
}

const getSearchValue = (value) => {

    sonMessage.value = value
}
</script>
    
<style lang='stylus'>
.mian
    width: 100%
    height: 100vh
    border:1px solid red
    display: flex
    justify-content: space-between
    align-items: center
    
      
</style>