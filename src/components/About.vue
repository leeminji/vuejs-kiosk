<template>
    <h1 class="Title">
        <div class="Title__eng">{{ titleEng }}</div>
        <div class="Title_kor">{{titleKor}}</div>
    </h1>
</template>
<script>
 export default{
  props :{
      titleEng : String,
      titleKor : String
  },
  data (){
   return{
   }
  }
 }
</script>
<style scoped>
 
</style>