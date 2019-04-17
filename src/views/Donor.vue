<template>
 <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <div class="Donor">
      <!-- 결과 -->
      <div class="Donor__result">
        <h2 class="Donor__result__title"><span class="tit">검색결과</span><span class="txt">총 9건 검색결과 입니다.</span></h2>
        <div class="Donor__result__list">
          <ul class="clear clearfix">
            <li 
              v-for="(item, index) in donorList "
              v-bind:key="index">
              <div class="name">{{item.name}}</div>
              <div class="price">{{item.price}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- //결과 -->
      <!-- 검색 -->
      <div class="Donor__search">
        <div class="Donor_search_input">
          <input type="text"  v-model="search" v-on="filterList" placeholder="search title..">
          <KeyboardComponet />
        </div>
      </div>
      <!-- //검색 -->
    </div>
 </div>
</template>
<script>
import TitleComponent from '../components/common/Title'
import KeyboardComponet from '../components/common/Keyboard'

import "simple-keyboard/build/css/index.css";
 export default{
  components : {
    TitleComponent,
    KeyboardComponet
  },
  props: ["input", "onInputChange"],
  data (){
   return{ 
    menuCount : 1,
    titleEng:"WonKwang Donor",
    titleKor:"기부자 소개",
    search :"",
    donorList : [
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)현대', price:'1천만원~5천만원'},
      {name:'(사)삼성', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)비알네트콤', price:'1천만원~5천만원'},
      {name:'(사)국제', price:'1천만원~5천만원'},
      {name:'(사)삼진', price:'1천만원~5천만원'},
      {name:'(사)기부자', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)국제티', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)국제티클럽', price:'1천만원~5천만원'},
      {name:'(사)카페', price:'1천만원~5천만원'},
      {name:'(사)커피', price:'1천만원~5천만원'},
      {name:'(사)명함', price:'1천만원~5천만원'},
      {name:'(사)기타', price:'1천만원~5천만원'},
    ]
   }
  },
  mounted() {
   
  },
  methods : {

  },
  computed : {
    filterList(){

      if( this.search.length < 0 ) return;
      console.log(this.search);
      
      this.donorList.filter((item)=>{
          return item.name.indexOf(this.search) > -1;
      });

      //console.log(this.donorList);
    }
  }
 }

</script>
<style lang="scss" scoped>
  .Donor{
    position: relative;
    height: 450px;
    margin: 0 3em;
    :after{
      content: '';
      display: block;
      clear: both;
    }
    &__result{
      float:left;
      box-sizing: border-box;
      padding:2em;
      width:48%;
      height:100%;
      background:#F5DEB3;

      &__title{
        span{
          display:inline-block;
        }
        .tit{
          font-size:2em;
          color:#8B4513
        }
        .txt{
          font-size:1em;
          padding-left:1em;
          color:#CD853F
        }
      }

      &__list{
        margin-top:2em;
        padding-left:1em;
        padding-right:1em;
        height:320px;
        overflow-y:auto;

        li{
          position: relative;
          padding-left:10em;
          margin-bottom: .5em;
          :after{
            position:absolute;
            left:9em;
            top:50%;
            height:1px;
            content: "";
            background:#CD853F;
            right:9em;
          }
          span{
            
          }
          .name{
            position: absolute;
            left:0;
            top:0;
            width:10em;
          }
          .price{
            float:right;
          }

        }
      }
    }
    &__search{
      float: right;
      box-sizing: border-box;
      padding:2em;
      width:52%;
      height:100%;
      background:#fff;
    }
  }
</style>