<template>
    <div class="Page Bg1">
      <TitleComponent v-bind:titleEng="titleEng" v-bind:titleKor="titleKor"></TitleComponent>
      <SubMenuComponent :menuList="subMenu" :menuIndex="menuIndex" @menuClick="menuChange" />
      <HistoryItemComponent :itemList="searchList" v-if="searchList != null"></HistoryItemComponent>
    </div>
</template>
<script>
import TitleComponent from '@/components/common/Title'
import SubMenuComponent from '@/components/common/SubMenu'
import HistoryItemComponent from '@/components/HistoryItem'
export default {
    components : {
        TitleComponent,
        SubMenuComponent,
        HistoryItemComponent
    },
    data (){
        return{
            titleKor:'원광대학교연혁',
            titleEng : "Wonkwang History", 
            menuIndex: 0,
            subMenu : [
                {name:"2010년대", category:"2010"},
                {name:"2000년대", category:"2000"},
                {name:"1990년대", category:"1990"},
                {name:"1980년대", category:"1980"},
                {name:"1970~1940년대", category:"etc"},
            ],
            itemList : [],
            searchList : []
        }
    },
    methods :{
        menuChange(index){
            this.menuIndex = index;
            this.sortListChange();
        },
        sortListChange(){

            //아무것도 없을땐 빈값 리턴
            this.searchList = [];
            if( this.itemList.length == 0 ) return null;
            let resultList = null;
            
            //메뉴인덱스값으로 판단하여 리턴
            resultList = this.itemList.filter((item, index) =>{
                const searchYear = this.subMenu[this.menuIndex].category;
                if( searchYear !== 'etc'){
                    console.log(searchYear, item.year);
                    return String(item.year).substr(0,3) == searchYear.substr(0,3);
                }else{
                    return parseInt(item.year) < 1980;
                }
            });

            console.log(resultList);
            this.searchList = resultList.sort(function(a, b){
                if( a.year < b.year ){
                    return 1;
                }
                if( a.year > b.year ){
                  return -1;
                }
                return 0;
            });
        }
    },
    created(){
        this.$axios.get('/static/history.json')
        .then((response)=>{
            this.itemList = response.data;
            this.sortListChange();
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>
