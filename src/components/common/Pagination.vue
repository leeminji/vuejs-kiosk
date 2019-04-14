<template>
    <div class="Pagination">
        <button class="Pagination__btn Pagination__btn-prev" @click="pagePrev" v-show="pageIndex > 0">이전</button>
        <button class="Pagination__num" v-for="n in col" v-bind:key="n" @click="pageOn((pageIndex*col)+n)" href="">{{(pageIndex*col)+n}}</button>
        <button class="Pagination__btn Pagination__btn-next" @click="pageNext" v-show="pageIndex < totalPage ">다음</button> 
    </div>
</template>
<script>
export default {
    props : ["totalCount", "col", "pageIndex"],
    mounted(){
          console.log("mounted");
    },
    created(){
        console.log("created");     
    },
    data(){
        return{
            totalPage : Math.floor(this.totalCount / this.col)-1
        }
    },
    computed : {
        pageCount(){
            let totalPage = Math.floor(this.totalCount / this.col)-1;
            this.totalPage = totalPage;
            return totalPage;
        }
    },
    methods : {
        pagePrev(){
            console.log("perv "+this.pageIndex);
            if( this.pageIndex < 0 ){
                return;
            }           
            this.$emit("pagePrev");
        },
        pageNext(){
            console.log(this.totalPage);
            if( this.pageIndex+1 > this.totalPage ){
                return;
            }
            this.$emit("pageNext");
        },
        pageOn(num){
            this.$emit("pageOn", num);
        }
    }
}
</script>

<style lang="scss">
    .Pagination{
        text-align: center;
        padding:1em 0;
        &__btn{
            display:inline-block;
            min-width:2em;
            padding:0 2px;
            height:2em;
            line-height: 2em;
            text-align: center;
            border:1px solid #eee;
            color:#fff;
            
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
            border:1px solid #eee;
            color:#fff;
            margin:0 1px;
        }
    }
</style>

