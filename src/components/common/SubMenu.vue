<template>
    <nav class="Navi">
        <button class="btn" v-for="(menu, index) in menuList" v-bind:key="index" v-bind:class="{active : menuIndex == index}" @click="menuChange(index)">
            <i class="round"></i><div class="txt">{{menu.name}}</div>
        </button>
    </nav>
</template>
<script>
export default {
    props:['menuList', 'menuIndex'],
    methods : {
        menuChange(index){
            this.$emit("menuClick", index);
        }
    }
}
</script>
<style scoped lang="scss">
    .Navi{
        position: relative;
        width:100%;
        text-align: center;
        &:after{
            content:'';
            position: absolute;
            left:0;
            right:0;
            top:0;
            height:1px;
            background: #B8860B;
        }
        .btn{
            display:inline-block;
            position: relative;
            padding:0 3em;
            color:#fff;
           &.active{
                color:#B8860B;
                .round{
                  transition: all .5s ease-in;
                  background:#B8860B;
                  height:20px;
                  width:20px;
                  margin-top:-5px;
                  margin-left:-10px;  
                }
                .txt{
                    transition: all .2s ease-in-out;
                    font-size:1.3em;
                }
            }
        }
        .round{
            transition: all .5s ease-out;
            z-index:100;
            position:absolute;
            top:-5px;
            left:50%;
            margin-left:-5px;
            display: block;
            width:10px;
            height:10px;
            border-radius:10px;
            background:#fff;
        }
        .txt{
            transition: all .2s ease-in-out;
            display: block;
            text-align: center;
            padding-top:20px;
            line-height:20px;
            font-size:1.1em;
        }
    }
</style>
