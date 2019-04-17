<template>
    <h1 class="Title">
        <div class="Title__eng"><span>{{ titleEng }}</span></div>
        <div class="Title__kor"><span>{{titleKor}}</span></div>
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
<style scoped lang="scss">
    .Title{
        padding:3em;
        &__eng{
            color:#fff;
            span {
                font-size:0.9em;
            }
        }
        &__kor{
            color : #b07f15;
            padding-top:.5em;
            span {
                font-size:2.5em;
                font-weight: normal
            }
        }
    }
</style>