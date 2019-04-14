<template>
    <div class="HonorItem">
        <div class="HonorItem__img">
            <img src="" alt="">
        </div>
        <div class="HonorItem__info">
            <ol class="clear">
                <li class="HonorItem__price"><span>{{outputPrice}}</span></li>
                <li class="HonorItem__name"><span>{{honorItem.name}}</span></li>
                <li class="HonorItem__type"><span>{{honorItem.type}}</span></li>
                <li class="HonorItem__organ"><span>{{honorItem.organ}}</span></li>
            </ol>
        </div>
    </div>
</template>

<script>
import {common} from "../mixins/common"

export default {
    props : ['honorItem','sliderOption'],
    created (){
       
    },
    data (){
        return {

        }
    },
    computed : {
        outputPrice(){
            let price = this.honorItem.price;
            let regexp = /\B(?=(\d{3})+(?!\d))/g;
            return "총 기부금액 "+ price.toString().replace(regexp, ',') +" 원";
        }
    },
    mixins : [common]
}
</script>

<style lang="scss" scoped>
    .HonorItem{
        width:100%;
        box-sizing: border-box;
        padding:0 15em;
        margin:0 auto;
        position: relative;
        &__img{
            width:200px;
            height:300px;
            border:.5em solid #fff;
        }
        &__info{
            position: absolute;
            left:550px;
            top:0;
        }
        &__price{
            font-size:2em;
            color:#ae8a1b
        }
        &__name{
            font-size:3em;
            color:#fff;
            padding-top:1em;
        }
        &__type{
            padding-top:.5em;
            font-size:1.2em;
            color:#fff;
        }
        &__organ{
            font-size:1em;
            color:#ddd;
            padding-top:1em;
        }
    }
</style>
