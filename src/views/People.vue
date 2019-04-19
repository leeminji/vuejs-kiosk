<template>
  <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <SubMenuComponent :menuList="subMenu" :menuIndex="menuIndex" @menuClick="menuChange" />
    <div class="Gallery">
        <ul class="clear clearfix Gallery__list" v-if="itemList.length">
            <li class="Gallery__item"
                v-for="item in currentList"
                v-bind:key="item.idx">
                <a href="javascript:;" @click="showItem(item.idx)" class="link"><span class="skip">링크</span></a>
                <span class="img"><img v-bind:src="item.img" alt=""></span>
            </li>
        </ul>
    </div>

    <transition name="rounter-main" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <ItemViewComponent :item="viewItem" v-if="viewItem !== null" @closeView="emptyView" />
    </transition>
 </div>
</template>
<script>
import TitleComponent from '@/components/common/Title'
import SubMenuComponent from '@/components/common/SubMenu'
import ItemViewComponent from '@/components/ItemView'
 export default{
  name:'people',
  mounted(){
      //현재페이지 리스트만 보임
      this.currentList = this.itemList.filter((item, index)=>{
          return index < 8;
      });

  },
  methods : {
    menuChange(index){
      this.menuIndex = index;
    },
    showItem(idx){
        this.viewItem = this.currentList.find( (item)=> {
            return item.idx == idx;
        });
    },
    emptyView(){
        this.viewItem = null;
    }    
  },
  computed : {
  },
  components : {
      TitleComponent,
      SubMenuComponent,
      ItemViewComponent
  },
  data (){
   return{
    title:'People',
    titleEng : 'Former Presidents',
    titleKor : '역대 이사장 및 총장',
    menuIndex : 0,
    viewItem : null,
    is_show : false,
    subMenu : [
        {name:"총장", category:"president"},
        {name:"이사장", category:"chairman"}
    ],
    currentList : [],
    itemList : [
        {
            idx : '1',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '2',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/frymire.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '3',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
            title : '제 1~5대 숭산 박길진 총장',
        },
        {
            idx : '4',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
            title : '제 5~6대 숭산 박길진2 총장',
        },        
        {
            idx : '5',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '6',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '7',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '8',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '9',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '10',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '11',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '12',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '13',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/goldhill.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '14',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '15',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '16',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '17',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '18',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '19',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '20',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '21',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '22',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },        
        {
            idx : '23',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 1~4대 숭산 박길진 총장',
        },
        {
            idx : '24',
            img : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            title : '제 3~5대 숭산 박길진2 총장',
        },              
    ]
   }
  }
 }
</script>
<style scoped lang="scss">
    .Pagination{
        .btn{
            display: inline-block;
            width:2em;
            height:2em;
            line-height: 2em;
            margin:0 3px;
            color:#fff;
            border:1px solid #eee;
            text-align: center;
            &.active{
                background:#eee;
                color:#222;
            }
        }
    }
    .Gallery{
        &__list{
            margin-top:3em;
            &:after{
                content:'';
                display:block;
                clear:both;
            }
        }
        &__item{
            position: relative;
            float:left;
            width:25%;
            margin-bottom:2em;
            .img{
                display: block;
                width:12em;
                height:12em;
                margin:0 auto;
                overflow: hidden;
                img{
                    max-width:100%;
                }
            }
            .link{
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
            }
        }
    }
</style>