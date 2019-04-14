<template>
 <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
 </div>
</template>
<script>
import TitleComponent from '../components/common/Title'

 export default{
  components : {
    TitleComponent
  },
  data (){
   return{
    menuCount : 1,
    titleEng:"WonKwang Donor",
    titleKor:"기부자 소개"
   }
  }
 }
</script>
<style scoped>

</style>