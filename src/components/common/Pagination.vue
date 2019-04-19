<template>
    <div class="Pagination">
        <button class="Pagination__btn Pagination__btn-prev" @click="pageStart" v-if="startPage > 1">처음</button>
        <button class="Pagination__btn Pagination__btn-prev" @click="pagePrev" v-if="getPrevPage">이전</button>
        
        <button 
        class="Pagination__num" 
        v-for="n in setPageStart" 
        v-bind:key="n" 
        v-bind:class="{'Pagination__num-active' : indexPage == n }"
        @click="pageOn(n)">{{n}}</button>

        <button class="Pagination__btn Pagination__btn-next" @click="pageNext" v-if="getNextPage">다음</button>
        <button class="Pagination__btn Pagination__btn-next" @click="pageEnd" v-if="endPage < pageTotalCount ">끝</button>
    </div>
</template>
<script>
import {eventBus} from '@/main'

export default {
    props : ["totalCount", "perPage", "perList"],
    computed : {
        setPageStart(){
            let arr = [];
            for(let i=this.startPage;i<=this.endPage;i++ ){
                arr.push(i);
            }
            return arr; 
        },
        getNextPage(){
            //그룹을 찾아서 같은 그룹인지 판별!
            return Math.ceil(this.indexPage/this.perPage) != Math.ceil(this.pageTotalCount / this.perPage);
        },
        getPrevPage(){
            //그룹을 찾아서 같은 그룹인지 판별!
            return Math.ceil(this.indexPage/this.perPage) != Math.ceil(1 / this.perPage);          
        }
    },
    data(){
        return{
            pageTotalCount : 0,
            startPage: 0,
            endPage : 0,
            indexPage : 1
        }
    },
    created(){
    },
    mounted(){
        let totalpage = Math.floor(this.totalCount / this.perList);
        if( this.totalCount % this.perList > 0){
            totalpage++;
        }
        this.pageTotalCount = totalpage;
        this.pageSetting();
    },
    methods : {
        pageSetting(){
            let startTemp = 0;

            startTemp = Math.ceil((this.indexPage)/this.perPage)-1;
            this.startPage =(this.perPage* startTemp)+1;
            this.endPage = this.startPage + this.perPage -1;

            if( this.endPage > this.pageTotalCount ){
                this.endPage = this.pageTotalCount;
            }
        },
        pageStart(){
            this.indexPage = 1;
            this.pageSetting();
        },
        pageEnd(){
            this.indexPage = this.pageTotalCount;
            this.pageSetting();
        },
        pagePrev(){
            //this.indexPage--;
            this.indexPage = (Math.ceil((this.indexPage/this.perPage))-1)*this.perPage;
            this.pageSetting();
        },
        pageNext(){
            this.indexPage = Math.ceil((this.indexPage/this.perPage))*this.perPage+1;
            if( this.indexPage > this.pageTotalCount ){
                this.indexPage = this.pageTotalCount;
            }
            //console.log(this.indexPage);
            this.pageSetting();
        },
        pageOn(num){
          this.indexPage = num;
          this.$emit("pageOn", this.indexPage);
        }
    }
}
</script>

<style lang="scss" scoped>
    .Pagination{
        text-align: center;
        padding:1em 0;
        &__btn{
            display:inline-block;
            min-width:2em;
            padding:0 2px;
            height:2em;
            margin:0 2px;
            line-height: 2em;
            text-align: center;
            border:1px solid rgba(255,255,255,0.5);
            color:rgba(255,255,255,0.5);
            &-prev{
            }
            &-next{
            }
        }
        &__num{
            display:inline-block;
            min-width:2em;
            height:2em;
            line-height: 2em;
            text-align: center;
            border:1px solid rgba(255,255,255,0.5);
            color:rgba(255,255,255,0.5);
            margin:0 2px;
            &-active{
                background:#422828;
                color:#fff;
            } 
        }
    }
</style>

