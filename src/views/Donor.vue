<template>
 <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <div class="Donor">
      <!-- 결과 -->
      <div class="Donor__result">
        <h2 class="Donor__result__title"><span class="tit">검색결과</span><span class="txt">총 {{searchResult.length}}건 검색결과 입니다.</span></h2>
        <div class="Donor__result__list">
          <ul class="clear clearfix">
            <li
              v-for="(item, index) in searchResult "
              v-bind:key="index">
              <div class="name">{{item.name}}</div>
              <div class="price">{{item.price}}</div>
            </li>
            <li v-if="searchResult.length == 0" class="empty">검색된 결과가 없습니다.</li>
          </ul>
        </div>
      </div>
      <!-- //결과 -->
      <!-- 검색 -->
      <div class="Donor__search">
        <div class="Donor__search__input">
          <input type="text"  v-model="search" :searchInput="search" v-on:change="searchResult" placeholder="검색어를 입력해주세요.">
        </div>
        <KeyboardComponet @btnDownkey="btnDownkey" />
        <div class="Donor__search__button">
          <button><span>다시검색</span></button>
          <button><span>검색</span></button>
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
    keyboardArr : [],
    search :"",
    searchList : [],
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
    btnDownkey(key){
      console.log(key);
      if( key == 'backspace' ){
        this.keyboardArr.pop();
      }else{
       this.keyboardArr.push(key);
      }
      this.search = this.$hangul.assemble(this.keyboardArr);
    }
  },
  computed : {
    searchResult(){
      if( this.search.length < 0 ) return this.donorList;
      
      let searchList = [];
      searchList = this.donorList.filter( (item, index, arr) =>{
        return (item.name.indexOf(this.search) > -1);
      });

      return searchList;
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
        li.empty{
          padding-left:0;
          text-align: center;
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

      &__input{
        border-bottom:1px solid #D2691E;
        margin-bottom:2em;
        input{
          border:0;
          background:none;
          width:100%;
          box-sizing: border-box;
          text-align: center;
          height: 3em;
        }
      }

      &__button{
        text-align: center;
        padding-top:1em;
        button{
          margin:0 3px;
          display:inline-block;
          border-radius: 3em;
          line-height: 3em;
          width:10em;
          background:#8B4513;
          color:#fff;
        }
      }
    }
  }
</style>