<template>
  <div id="app">
    <div id="nav" class="Navigation">
      <ul class="Navigation__ul">
        <li class="Navigation__list"><router-link to="/"><span>명예의전당</span></router-link></li>
        <li class="Navigation__list"><router-link to="/donor"><span>기부자소개</span></router-link> </li>
        <li class="Navigation__list"><router-link to="/blog"><span>역대 이사장 및 총장</span></router-link></li>
        <li class="Navigation__list"><router-link to="/blog"><span>명예박사 소개</span></router-link></li>
        <li class="Navigation__list"><router-link to="/blog"><span>원광대학교 연혁</span></router-link></li>
      </ul>
    </div>
    <!-- routerview가동작 -->
    <transition name="rounter-main" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
       <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      currentMenu : 0,
    }
  },
  created(){
  },
  methods : {
  },
  computed : {
  }
}
</script>

<style lang="scss">
@mixin transition-all($speed) {
  -webkit-transition: all $speed;
  -moz-transition: all $speed;
  -ms-transition: all $speed;
 -transition: all $speed;
}
$list-length : 5;

body, html{height:100%;height:100%;overflow: hidden}

.Navigation{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  &__ul{
    list-style: none;
    &::after{
      content:'';
      display:block;
      clear:both;
    }
  }
  &__list{
    float:left;
    width: 20%;
    background:#715710;
    &:first-child{
      a{
        border-left:0
      }
    }
    a{
      @include transition-all(.5s);
      display: block;
      line-height: 5em;
      text-align: center;
      border-left:1px solid #aaa;
      span{
        font-size:1.2em;
        letter-spacing: -.1em;
        color:#fff;
      }
      &:hover{
        @include transition-all(.5s);
        background:#412000
      }
    }
    .router-link-exact-active{
      background:#412000
    }
  }
}

/* Page */
.Page{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:5em;
}


.Bg1{
  background: -moz-linear-gradient( 120deg, rgb(10,1,53) 0%, rgb(3,7,22) 100%);
  background: -webkit-linear-gradient( 120deg, rgb(10,1,53) 0%, rgb(3,7,22) 100%);
  background: -ms-linear-gradient( 120deg, rgb(10,1,53) 0%, rgb(3,7,22) 100%);
  background: linear-gradient( 120deg, rgb(10,1,53) 0%, rgb(3,7,22) 100%);
}
.Bg2{
  background: -moz-linear-gradient( 120deg, rgb(237,215,238) 0%, rgb(248,248,206) 37%, rgb(212,202,215) 66%, rgb(176,155,224) 100%);
  background: -webkit-linear-gradient( 120deg, rgb(237,215,238) 0%, rgb(248,248,206) 37%, rgb(212,202,215) 66%, rgb(176,155,224) 100%);
  background: -ms-linear-gradient( 120deg, rgb(237,215,238) 0%, rgb(248,248,206) 37%, rgb(212,202,215) 66%, rgb(176,155,224) 100%);
  background: linear-gradient( 120deg, rgb(237,215,238) 0%, rgb(248,248,206) 37%, rgb(212,202,215) 66%, rgb(176,155,224) 100%);
}

</style>
