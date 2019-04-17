<template>
    <div class="Page Bg1">
      <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    </div>
</template>
<script>
import TitleComponent from '@/components/common/Title'
export default {
    components : {
        TitleComponent
    },
    data (){
        return{
            titleKor:'원광대학교연혁',
            titleEng : "Wonkwang History", 
        }
    }
}
</script>
