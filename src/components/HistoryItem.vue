<template>
	
	<div class="HistoryItem fadeIn animated">
		<div class="HistoryItem__content ">
			<div class="HistoryItem__list clearfix">
				<!-- yearList -->
				<div class="HistoryItem__area" v-show="itemList.length > 0"
					v-for="(yearList, i) in itemList" 
					v-bind:key="i">
					<div class="HistoryItem__title  animated slideInDown"><span>{{yearList.year}}</span></div>
					<ul class="clear">
					<li class="HistoryItem__item  animated slideInDown" 
					v-for="(item, j) in contentList(i)" 
					v-bind:key="j">
						<div class="date">{{item.date}}</div>
						<div class="info">
							<ul class="clear clearfix">
								<li class="blit" v-for="(txt, k) in item.content" v-bind:key="k">{{txt}}</li>
							</ul>
						</div>
					</li>
					</ul>
				</div>
				<!-- //yearList -->
			</div>
		</div>
	</div>

</template>
<script>
export default {
	props : ["itemList"],
	data(){
		return {
		}
	},
	computed : {
		historyList (){
			return [];
		}
	},
	methods : {
		contentList(index){
			let result = [];
			//console.log(this.itemList[index]);
			 this.itemList[index].list.forEach((item, i) => {
				 let obj = {};
				 //console.log(item);
				 let itemDate = item.date.split("-");
				 obj.date = `${itemDate[1]}.${itemDate[2].length == 1 ? "0".itemDate[2] : itemDate[2]}`;
				 obj.content = item.content.split("\n");
				 result[i] = obj;
			 });
			//console.log( result );
			return result;
		}
	}
}
</script>
<style lang="scss" scoped>
	.HistoryItem{
		position: relative;
		margin: 4em 3em 0;
		height:400px;
		background: #fff;
		&:after{
			content:'';
			position:absolute;
			top:0;
			bottom:0;
			width:15rem;
			background:#efdabd;
		}
		&__area{
			min-height:10em;
			position: relative;
			-webkit-animation-fill-mode: none;
    		animation-fill-mode: none;
			> ul{
				padding-top:1em;
				padding-left:15em;
			}	
		}
		&__title{
			position:absolute;
			top:0;
			left:0;
			width:11rem;
			z-index: 10;
			span {
				margin:0em auto;
				display:block;
				line-height:8rem;
				width:8rem;
				text-align: center;
				font-size:2em;
				font-weight: bold;
				border-radius: 8rem;
				background:#c88d3c;
				color:#fff;
			}
		}
		&__content{
			padding:2em;
		}
		&__list{
			height:340px;
			overflow-y:auto;
			&.col2{
				> ul{
					width:50%;
					box-sizing: border-box;
					padding:0 1em;
					float:left;
				}
			}

		}
		&__item{
			position: relative;
			padding-left:4em;
			line-height:1.2em;
			margin-bottom:2em;
			.date{
				position: absolute;
				left:0px;
				top:-2px;
				padding:2px 2px;
				text-align: center;
				font-weight: bold;
				border-bottom:1px solid #c88d3c;
			}
			.blit{
				display: block;
				position: relative;
				padding-left:10px;
				&:after{
					content:'.';
					position: absolute;
					left:0;
					top:-5px;
					width:10px;
				}
			}
		}
	}
</style>

