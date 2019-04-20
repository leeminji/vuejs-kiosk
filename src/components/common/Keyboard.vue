<template>
	<div class="Keyboard">
		<div class="simple-keyboard hg-theme-default hg-layout-default" v-if="keyboardList != null">
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" 
				v-for="(keybutton, index) in keyboardList[0]"
				@click="btnDownkey(keybutton.skinbtn)"
				v-bind:key="index"
				v-bind:data-skbtn="keybutton.skinbtn" 
				v-bind:class="keybutton.skbtnunid">
				<span>{{keybutton.skinbtn}}</span>
				</div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" 
				v-for="(keybutton, index) in keyboardList[1]"
				@click="btnDownkey(keybutton.skinbtn)"
				v-bind:key="index"
				v-bind:data-skbtn="keybutton.skinbtn" 
				v-bind:class="keybutton.skbtnunid">
				<span>{{keybutton.skinbtn}}</span>
				</div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" 
				v-for="(keybutton, index) in keyboardList[2]"
				@click="btnDownkey(keybutton.skinbtn)"
				v-bind:key="index"
				v-bind:data-skbtn="keybutton.skinbtn" 
				v-bind:class="keybutton.skbtnunid">
				<span>{{keybutton.skinbtn}}</span>
				</div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" 
				v-for="(keybutton, index) in keyboardList[3]"
				@click="btnDownkey(keybutton.skinbtn)"
				v-bind:key="index"
				v-bind:data-skbtn="keybutton.skinbtn" 
				v-bind:class="keybutton.skbtnunid">
				<span>{{keybutton.skinbtn}}</span>
				</div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" 
				v-for="(keybutton, index) in keyboardList[4]"
				@click="btnDownkey(keybutton.skinbtn)"
				v-bind:key="index"
				v-bind:data-skbtn="keybutton.skinbtn" 
				v-bind:class="[{ 'hg-functionBtn' : keybutton.skbtnFunction }, keybutton.skbtnunid]">
				<span>{{keybutton.skinbtn}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import 'simple-keyboard/build/css/index.css';
	
	export default {
		props : ["searchInput"],
		methods : {
			btnDownkey(key){
				this.$emit("btnDownkey", key);
			}
		},
		computed :{
			keyboardList(){
				let keyList = [];
				if( this.keyboard == null ) return null;
				keyList = this.keyboard.filter((item)=>{
					return item.lang == this.lang;
				});
				this.currentKeyList = keyList[0].keyList;
				return keyList[0].keyList;
			}
		},
		data (){
			return{
				currentKeyList : [],
				lang : "ko",
				keyboard : [
					{
						lang : "en",
						keyList : [
							[
								{ "skinbtn": "`", "skbtnunid":"default-r0b0" },
								{ "skinbtn": "1", "skbtnunid":"default-r0b1" },
								{ "skinbtn": "2", "skbtnunid":"default-r0b2" },
								{ "skinbtn": "3", "skbtnunid":"default-r0b3" },
								{ "skinbtn": "4", "skbtnunid":"default-r0b4" },
								{ "skinbtn": "5", "skbtnunid":"default-r0b5" },
								{ "skinbtn": "6", "skbtnunid":"default-r0b6" },
								{ "skinbtn": "7", "skbtnunid":"default-r0b7" },
								{ "skinbtn": "8", "skbtnunid":"default-r0b8" },
								{ "skinbtn": "9", "skbtnunid":"default-r0b9" },
								{ "skinbtn": "0", "skbtnunid":"default-r0b10" },
								{ "skinbtn": "-", "skbtnunid":"default-r0b11" },
								{ "skinbtn": "=", "skbtnunid":"default-r0b12" },
								{ "skinbtn": "backspace", "skbtnunid":"default-r0b13" }
							],
							[
								{ "skinbtn": "tab", "skbtnunid":"default-r1b0" },
								{ "skinbtn": "q", "skbtnunid":"default-r1b1" },
								{ "skinbtn": "w", "skbtnunid":"default-r1b2" },
								{ "skinbtn": "e", "skbtnunid":"default-r1b3" },
								{ "skinbtn": "r", "skbtnunid":"default-r1b4" },
								{ "skinbtn": "t", "skbtnunid":"default-r1b5" },
								{ "skinbtn": "y", "skbtnunid":"default-r1b6" },
								{ "skinbtn": "u", "skbtnunid":"default-r1b7" },
								{ "skinbtn": "i", "skbtnunid":"default-r1b8" },
								{ "skinbtn": "o", "skbtnunid":"default-r1b9" },
								{ "skinbtn": "p", "skbtnunid":"default-r1b10" },
								{ "skinbtn": "[", "skbtnunid":"default-r1b11" },
								{ "skinbtn": "]", "skbtnunid":"default-r1b12" },
								{ "skinbtn": "\\", "skbtnunid":"default-r1b13" }
							],
							[
								{ "skinbtn": "caps", "skbtnunid":"default-r2b0", "skbtnFunction" : true },
								{ "skinbtn": "a", "skbtnunid":"default-r2b1" },
								{ "skinbtn": "s", "skbtnunid":"default-r2b2" },
								{ "skinbtn": "d", "skbtnunid":"default-r2b3" },
								{ "skinbtn": "f", "skbtnunid":"default-r2b4" },
								{ "skinbtn": "g", "skbtnunid":"default-r2b5" },
								{ "skinbtn": "h", "skbtnunid":"default-r2b6" },
								{ "skinbtn": "j", "skbtnunid":"default-r2b7" },
								{ "skinbtn": "k", "skbtnunid":"default-r2b8" },
								{ "skinbtn": "l", "skbtnunid":"default-r2b9" },
								{ "skinbtn": ";", "skbtnunid":"default-r2b10" },
								{ "skinbtn": "'", "skbtnunid":"default-r2b11" },
								{ "skinbtn": "ENTER", "skbtnunid":"default-r2b12", "skbtnFunction" : true }
							],
							[
								{ "skinbtn": "shift", "skbtnunid":"default-r3b0", "skbtnFunction" : true },
								{ "skinbtn": "z", "skbtnunid":"default-r3b1" },
								{ "skinbtn": "x", "skbtnunid":"default-r3b2" },
								{ "skinbtn": "c", "skbtnunid":"default-r3b3" },
								{ "skinbtn": "v", "skbtnunid":"default-r3b4" },
								{ "skinbtn": "b", "skbtnunid":"default-r3b5" },
								{ "skinbtn": "n", "skbtnunid":"default-r3b6" },
								{ "skinbtn": "m", "skbtnunid":"default-r3b7" },
								{ "skinbtn": ",", "skbtnunid":"default-r3b8" },
								{ "skinbtn": ".", "skbtnunid":"default-r3b9" },
								{ "skinbtn": "/", "skbtnunid":"default-r3b10" },
								{ "skinbtn": "shift", "skbtnunid":"default-r3b11", "skbtnFunction" : true }
							],
							[
								{ "skinbtn": ".com", "skbtnunid":"default-r4b0" },
								{ "skinbtn": "@", "skbtnunid":"default-r4b1" },
								{ "skinbtn": " ", "skbtnunid":"default-r4b2", "skbtnFunction" : true}
							]
						]
					},
					{
						lang : "ko",
						keyList : [
							[
								{ "skinbtn": "`", "skbtnunid":"default-r0b0" },
								{ "skinbtn": "1", "skbtnunid":"default-r0b1" },
								{ "skinbtn": "2", "skbtnunid":"default-r0b2" },
								{ "skinbtn": "3", "skbtnunid":"default-r0b3" },
								{ "skinbtn": "4", "skbtnunid":"default-r0b4" },
								{ "skinbtn": "5", "skbtnunid":"default-r0b5" },
								{ "skinbtn": "6", "skbtnunid":"default-r0b6" },
								{ "skinbtn": "7", "skbtnunid":"default-r0b7" },
								{ "skinbtn": "8", "skbtnunid":"default-r0b8" },
								{ "skinbtn": "9", "skbtnunid":"default-r0b9" },
								{ "skinbtn": "0", "skbtnunid":"default-r0b10" },
								{ "skinbtn": "-", "skbtnunid":"default-r0b11" },
								{ "skinbtn": "=", "skbtnunid":"default-r0b12" },
								{ "skinbtn": "backspace", "skbtnunid":"default-r0b13" }
							],
							[
								{ "skinbtn": "tab", "skbtnunid":"default-r1b0" },
								{ "skinbtn": "ㅂ", "skbtnunid":"default-r1b1", "skbtnShift" : "ㅃ"},
								{ "skinbtn": "ㅈ", "skbtnunid":"default-r1b2", "skbtnShift" : "ㅉ" },
								{ "skinbtn": "ㄷ", "skbtnunid":"default-r1b3", "skbtnShift" : "ㄸ" },
								{ "skinbtn": "ㄱ", "skbtnunid":"default-r1b4", "skbtnShift" : "ㄲ" },
								{ "skinbtn": "ㅅ", "skbtnunid":"default-r1b5", "skbtnShift" : "ㅆ" },
								{ "skinbtn": "ㅛ", "skbtnunid":"default-r1b6" },
								{ "skinbtn": "ㅕ", "skbtnunid":"default-r1b7" },
								{ "skinbtn": "ㅑ", "skbtnunid":"default-r1b8" },
								{ "skinbtn": "ㅐ", "skbtnunid":"default-r1b9", "skbtnShift" : "ㅒ"},
								{ "skinbtn": "ㅔ", "skbtnunid":"default-r1b10", "skbtnShift" : "ㅖ"},
								{ "skinbtn": "[", "skbtnunid":"default-r1b11" },
								{ "skinbtn": "]", "skbtnunid":"default-r1b12" },
								{ "skinbtn": "\\", "skbtnunid":"default-r1b13" }
							],
							[
								{ "skinbtn": "caps", "skbtnunid":"default-r2b0", "skbtnFunction" : true },
								{ "skinbtn": "ㅁ", "skbtnunid":"default-r2b1" },
								{ "skinbtn": "ㄴ", "skbtnunid":"default-r2b2" },
								{ "skinbtn": "ㅇ", "skbtnunid":"default-r2b3" },
								{ "skinbtn": "ㄹ", "skbtnunid":"default-r2b4" },
								{ "skinbtn": "ㅎ", "skbtnunid":"default-r2b5" },
								{ "skinbtn": "ㅗ", "skbtnunid":"default-r2b6" },
								{ "skinbtn": "ㅓ", "skbtnunid":"default-r2b7" },
								{ "skinbtn": "ㅏ", "skbtnunid":"default-r2b8" },
								{ "skinbtn": "ㅣ", "skbtnunid":"default-r2b9" },
								{ "skinbtn": ";", "skbtnunid":"default-r2b10" },
								{ "skinbtn": "'", "skbtnunid":"default-r2b11" },
								{ "skinbtn": "ENTER", "skbtnunid":"default-r2b12", "skbtnFunction" : true }
							],
							[
								{ "skinbtn": "shift", "skbtnunid":"default-r3b0", "skbtnFunction" : true },
								{ "skinbtn": "ㅋ", "skbtnunid":"default-r3b1" },
								{ "skinbtn": "ㅌ", "skbtnunid":"default-r3b2" },
								{ "skinbtn": "ㅊ", "skbtnunid":"default-r3b3" },
								{ "skinbtn": "ㅍ", "skbtnunid":"default-r3b4" },
								{ "skinbtn": "ㅠ", "skbtnunid":"default-r3b5" },
								{ "skinbtn": "ㅜ", "skbtnunid":"default-r3b6" },
								{ "skinbtn": "ㅡ", "skbtnunid":"default-r3b7" },
								{ "skinbtn": ",", "skbtnunid":"default-r3b8" },
								{ "skinbtn": ".", "skbtnunid":"default-r3b9" },
								{ "skinbtn": "/", "skbtnunid":"default-r3b10" },
								{ "skinbtn": "shift", "skbtnunid":"default-r3b11", "skbtnFunction" : true }
							],
							[
								{ "skinbtn": ".com", "skbtnunid":"default-r4b0" },
								{ "skinbtn": "@", "skbtnunid":"default-r4b1" },
								{ "skinbtn": " ", "skbtnunid":"default-r4b2", "skbtnFunction" : true}
							]
						]
					}
				]
			}
		}
	}
</script>

<style>

</style>

