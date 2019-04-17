<template>
  <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <div class="Slider">
       <swiper
       :options="swiperOption" 
        ref="mySwiper" 
        @someSwiperEvent="callback">
          <swiper-slide
           v-bind:key ="index"
           v-for="(honorItem, index) in honorList">
            <HonorItemComponent :honorItem="honorItem"></HonorItemComponent>
          </swiper-slide>
          <div class="swiper-pagination Slider__pagination" slot="pagination"></div>
        </swiper>
    </div>
    <!-- 슬라이드버튼 -->
    <div class="Slider__btn">
      <a href="javascript:;" class="swiper-button-prev"><span class="skip">이전</span></a>
      <a href="javascript:;" class="swiper-button-next"><span class="skip">다음</span></a>
    </div>
     <!-- //슬라이드버튼 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import { swiper, swiperSlide, swiperPlugins, pagination } from 'vue-awesome-swiper'
import TitleComponent from '@/components/common/Title.vue'
import HonorItemComponent from '@/components/HonorItem.vue'
import PaginationComponent from '@/components/common/Pagination'

export default {
  name: 'honor',
  data() {
    return{
     titleEng : "Wonkwang Honor's Club",
     titleKor : "명예의 전당",
     currentIndex : 1,
     pageIndex : 0,
     pageCol : 4,
     honorList : [
       { id:1, price:"52200000", name:"메가스터디(주)1", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?image=110" },
       { id:2, price:"52200000", name:"메가스터디(주)2", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:3, price:"52200000", name:"메가스터디(주)3", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:4, price:"52200000", name:"메가스터디(주)4", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:5, price:"52200000", name:"메가스터디(주)5", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:6, price:"52200000", name:"메가스터디(주)6", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:7, price:"52200000", name:"메가스터디(주)7", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:8, price:"52200000", name:"메가스터디(주)8", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:9, price:"52200000", name:"메가스터디(주)9", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:10, price:"52200000", name:"메가스터디(주)10", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:11, price:"52200000", name:"메가스터디(주)11", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" },
       { id:12, price:"52200000", name:"메가스터디(주)12", type:"발전기금", organ:"연강학술재단", image:"https://picsum.photos/200/300/?random" }       
     ],
      swiperOption: {
        name: 'currentSwiper',
        autoplay: true,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        loop : true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', // "bullets", "fraction", "progressbar" or "custom"
          clickable : true,
          renderBullet(index, className){
            return `<span class="${className} swiper-pagination-bullet-custom">${index+1}</span>`
          }
        },
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    PaginationComponent,
    TitleComponent,
    HonorItemComponent,
    swiper,
    swiperSlide,
  },
  methods : {
    callback(){
      console.log("callback!");

    }
  },
  //computed 속성은 종속 대상을 따라 저장(캐싱)된다
  computed : {
      swiper() {
        console.log('swiper')
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
      console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
      this.swiper.on('touchMove', function(e){

      });

      //페이지네이션 수정 swiper-pagination Slider__pagination swiper-pagination-bullets
      // let p = document.getElementsByClassName('swiper-pagination-bullet');
      // for(let i=0;i<p.length;i++){
      //   p[i].innerHTML = "<span>"+(i+1)+"</span>";
      // }
  }
}
</script>
<style lang="scss">
  .Slider{
    margin-top:3em;
    &__btn{
      a{
        position:absolute;
        top:50%;
        margin-top:-1.5em;
        width:10em;
        height:5em;
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
    .swiper-slide {
      height: 400px;
    }
    &__pagination{
      z-index: 100;
      > span{
        display: inline-block;
        width:2em;
        height: 2em;
        line-height: 2em;
        border:1px solid #222;
        margin:0 .2em;
        color:#666;
      }
      > span:hover{
        border-color:#eee;
        color:#eee;
      }
      > .swiper-pagination-bullet-active{
        border-color:#fff;
        color:#fff
      }
    }
  }
  

</style>
