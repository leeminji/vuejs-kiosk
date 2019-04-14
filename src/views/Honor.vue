<template>
  <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <div class="Slider">
        <swipe 
          class="my-swipe" 
          ref="mySwipe2" 
          :auto="0" 
          :loop="false" 
          :show-indicators="false" 
          @change="changeSwipe">

          <swipe-item 
           v-bind:key ="index"
           v-for="(honorItem, index) in honorList">
            <HonorItemComponent :honorItem="honorItem" />
          </swipe-item>

        </swipe>

        <button @click="goto(2)">goto page 3</button>
    </div>
    
    <!-- 슬라이드버튼 -->
    <div class="Slider__btn">
      <a href="javascript:;" class="prev" id="btnPrev" @click="gotoPrev">
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="45px" height="100%">
        <defs>
        <linearGradient id="PSgrad_0" x1="50%" x2="0%" y1="86.603%" y2="0%">
          <stop offset="0%" stop-color="rgb(196,115,36)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(78,50,25)" stop-opacity="1" />
        </linearGradient>
        </defs>
        <path fill-rule="evenodd"  fill="url(#PSgrad_0)"
        d="M45.000,7.102 L14.267,38.026 L44.961,68.910 L37.914,76.000 L7.220,45.116 L7.059,45.278 L0.000,38.176 L0.161,38.013 L0.039,37.890 L7.086,30.800 L7.208,30.923 L37.941,0.000 L45.000,7.102 Z"/>
        </svg>      
      </a>
      <a href="javascript:;" class="next" id="btnNext" @click="gotoNext">
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="45px" height="100%">
        <defs>
        <linearGradient id="PSgrad_0" x1="50%" x2="0%" y1="86.603%" y2="0%">
          <stop offset="0%" stop-color="rgb(196,115,36)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(78,50,25)" stop-opacity="1" />
        </linearGradient>
        </defs>
        <path fill-rule="evenodd"  fill="url(#PSgrad_0)"
        d="M45.000,38.176 L37.941,45.278 L37.780,45.116 L7.086,76.000 L0.039,68.910 L30.733,38.026 L0.000,7.102 L7.059,0.000 L37.792,30.923 L37.914,30.800 L44.961,37.890 L44.839,38.013 L45.000,38.176 Z"/>
        </svg>
      </a>
    </div>
     <!-- //슬라이드버튼 -->

     <PaginationComponent 
      :totalCount="honorList.length" 
      :col="2" :pageIndex="pageIndex" 
      @pageOn="pageOn"
      @pageNext="pageNext" 
      @pagePrev="pagePrev" />

  </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem } from 'vue-swipe';
import TitleComponent from '@/components/common/Title.vue'
import HonorItemComponent from '@/components/HonorItem.vue'
import PaginationComponent from '@/components/common/Pagination'
export default {
  name: 'home',
  data() {
    return{
     titleEng : "Wonkwang Honor's Club",
     titleKor : "명예의 전당",
     current : 0,
     pageIndex : 0,
     honorList : [
       { id:1, price:"52200000", name:"메가스터디(주)0", type:"발전기금", organ:"연강학술재단" },
       { id:2, price:"52200000", name:"메가스터디(주)1", type:"발전기금", organ:"연강학술재단" },
       { id:3, price:"52200000", name:"메가스터디(주)2", type:"발전기금", organ:"연강학술재단" },
       { id:4, price:"52200000", name:"메가스터디(주)3", type:"발전기금", organ:"연강학술재단" },
       { id:5, price:"52200000", name:"메가스터디(주)4", type:"발전기금", organ:"연강학술재단" },
       { id:6, price:"52200000", name:"메가스터디(주)5", type:"발전기금", organ:"연강학술재단" }
     ]
    }
  },
  created() {
  },
  components: {
    PaginationComponent,
    TitleComponent,
    HonorItemComponent,
    'swipe' : Swipe,
    'swipe-item' : SwipeItem
  },
  methods : {
      goto(index) {
        this.$refs.mySwipe2.goto(index);
      },
      changeSwipe(newIndex, oldIndex) {
        console.log(`swipe from ${oldIndex} to ${newIndex}`);
      },
      gotoNext(){
        this.$refs.mySwipe2.next();
      },
      gotoPrev(){
        this.$refs.mySwipe2.prev();
      },
      pageNext() {
        this.pageIndex++;
      },
      pagePrev(){
        this.pageIndex--;
      },
      pageOn : (num) =>{
        console.log(num);
      }
  }
}
</script>
<style scoped lang="scss">
  .Slider{
    padding-top:10em;
    &__btn{
      a{
        position:absolute;
        top:50%;
        margin-top:-37px;
        width:10em;
        overflow: hidden;
        text-align: center
      }
      .prev{
        left:0;
      }
      .next{
        right:0;
      }
    }
    .my-swipe {
      height: 400px;
    }
  }

</style>
