<template>
  <div class="Page Bg1">
    <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
    <SubMenuComponent :menuList="subMenu" :menuIndex="menuIndex" @menuClick="menuChange" />
    
    <!-- 갤러리리스트 -->
    <div class="Gallery">
        <ul class="clear clearfix Gallery__list" v-if="itemList.length">
            <li class="Gallery__item"
                v-for="item in searchList"
                v-bind:key="item.idx">
                <a href="javascript:;" @click="showItem(item.idx)" class="link"><span class="skip">링크</span></a>
                <span class="img"><img v-bind:src="item.img" alt=""></span>
            </li>
        </ul>
    </div>
    <!-- //갤러리리스트 -->
    <PaginationComponent 
        class="Gallery__pagination" 
        @pageOn="pageOn"
        :totalCount="itemList.length" 
        :perPage="5"
        :perList="galleryCount">
    </PaginationComponent>
    
    <transition name="rounter-main" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <ItemViewComponent :item="viewItem" v-if="viewItem !== null" @closeView="emptyView"  />
    </transition>

 </div>
</template>
<script>
import TitleComponent from '@/components/common/Title'
import SubMenuComponent from '@/components/common/SubMenu'
import ItemViewComponent from '@/components/ItemView'
import PaginationComponent from '@/components/common/Pagination'

 export default{
  name:'people',
  created(){
    this.$axios.get('/static/doctor.json')
    .then((response)=>{
        this.itemList = response.data;
        this.sortListChange();
    })
    .catch((err)=>{
        console.log(err);
    })
  },
  mounted(){
      this.setCurrentList();
  },
  methods : {
    sortListChange(){
            //아무것도 없을땐 빈값 리턴
        this.searchList = [];
        if( this.itemList.length == 0 ) return null;

        const searchCategory = this.subMenu[this.menuIndex].category;

        //메뉴인덱스값으로 판단하여 리턴
        this.searchList = this.itemList.filter((item, index) =>{
            console.log(item);
            return item.category == searchCategory;
        });
        console.log(this.searchList);
    },
    setCurrentList(){
        //현재페이지 리스트만 보임
        this.searchList = this.itemList.filter((item, index)=>{
            if( index >= (this.page-1)* this.galleryCount && index < this.page*this.galleryCount ){
                console.log(index);
                return item; 
            }
        });
    },
    pageOn(n){
        console.log(n);
        this.page = n;
        this.setCurrentList();
    },
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
      ItemViewComponent,
      PaginationComponent
  },
  data (){
   return{
    title:'People',
    titleEng : "Honorary Doctor",
    titleKor : "명예박사 소개",
    menuIndex : 0,
    page : 1,
    galleryCount:8,
    viewItem : null,
    is_show : false,
    subMenu : [
        {name:"총장", category:"president"},
        {name:"이사장", category:"chairman"}
    ],
    searchList : [],
    itemList : []
   }
  }
 }
</script>
<style scoped lang="scss">

    .Gallery{
        &__pagination{
            position:absolute;
            left:0;
            right:0;
            bottom:2em;
        }
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