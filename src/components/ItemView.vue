<template>
    <div class="ItemView">
        <div class="ItemView__inner">
            <div class="ItemView__img">
                <img v-bind:src="item.img" alt="">
            </div>
            <div class="ItemView__info">
                <h2 class="ItemView__title"><span>{{item.title}}</span></h2>
                <div class="ItemView__detail">
                    <div class="tit">재임기간</div>
                    <div class="tit">학력</div>
                </div>
            </div>
        </div>
        <button class="ItemView__close" @click="closeView"><span class="skip">닫기</span></button>
    </div>
</template>
<script>
export default {
   props : ['item'],
   methods : {
       closeView(){
           this.$emit("closeView");
       }
   }
}
</script>
<style lang="scss" scoped>
    .ItemView{
        width:90%;
        position:absolute;
        left:0;
        right:0;
        top:50%;
        height:400px;
        margin-top:-200px;
        margin-left:auto;
        margin-right:auto;
        background:#fff;
        box-shadow: 0em 0em 1em rgba(0,0,0,.8);
        &:after{
            content:'';
            position: absolute;
            display:block;
            left:0;
            width:20em;
            top:0;
            bottom:0;
            background:#F5DEB3
        }
        &__title{
            font-size:2em;
        }
        &__img{
            position: relative;
            z-index:100;
            width:12em;
            height:15em;
            left:4em;
            top:3em;
            overflow: hidden;
            img{
                width:100%;
            }
        }
        &__info{
            position: absolute;
            z-index: 100;
            padding-left:22em;
            top:2em;
        }
        &__close{
            position: absolute;
            right:0em;
            top:-3em;
            width:3em;
            line-height:3em;
            &:after{
                content:'X';
                font-family: Arial;
                color:#DAA520;
                font-size:2em;
            }
        }
    }
</style>

