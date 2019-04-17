<template>
	<div class="Keyboard">
		<div class="Keyboard__inputArea">
			<input type="text">
		</div>
		<div class="simple-keyboard hg-theme-default hg-layout-default">
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" data-skbtn="`" data-skbtnuid="default-r0b0" data-displaylabel="`"><span>`</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="1" data-skbtnuid="default-r0b1" data-displaylabel="1"><span>1</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="2" data-skbtnuid="default-r0b2" data-displaylabel="2"><span>2</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="3" data-skbtnuid="default-r0b3" data-displaylabel="3"><span>3</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="4" data-skbtnuid="default-r0b4" data-displaylabel="4"><span>4</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="5" data-skbtnuid="default-r0b5" data-displaylabel="5"><span>5</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="6" data-skbtnuid="default-r0b6" data-displaylabel="6"><span>6</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="7" data-skbtnuid="default-r0b7" data-displaylabel="7"><span>7</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="8" data-skbtnuid="default-r0b8" data-displaylabel="8"><span>8</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="9" data-skbtnuid="default-r0b9" data-displaylabel="9"><span>9</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="0" data-skbtnuid="default-r0b10" data-displaylabel="0"><span>0</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="-" data-skbtnuid="default-r0b11" data-displaylabel="-"><span>-</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="=" data-skbtnuid="default-r0b12" data-displaylabel="="><span>=</span></div>
				<div class="hg-button hg-functionBtn hg-button-bksp" data-skbtn="{bksp}" data-skbtnuid="default-r0b13" data-displaylabel="backspace"><span>backspace</span></div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-functionBtn hg-button-tab" data-skbtn="{tab}" data-skbtnuid="default-r1b0" data-displaylabel="tab"><span>tab</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="q" data-skbtnuid="default-r1b1" data-displaylabel="q"><span>q</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="w" data-skbtnuid="default-r1b2" data-displaylabel="w"><span>w</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="e" data-skbtnuid="default-r1b3" data-displaylabel="e"><span>e</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="r" data-skbtnuid="default-r1b4" data-displaylabel="r"><span>r</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="t" data-skbtnuid="default-r1b5" data-displaylabel="t"><span>t</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="y" data-skbtnuid="default-r1b6" data-displaylabel="y"><span>y</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="u" data-skbtnuid="default-r1b7" data-displaylabel="u"><span>u</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="i" data-skbtnuid="default-r1b8" data-displaylabel="i"><span>i</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="o" data-skbtnuid="default-r1b9" data-displaylabel="o"><span>o</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="p" data-skbtnuid="default-r1b10" data-displaylabel="p"><span>p</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="[" data-skbtnuid="default-r1b11" data-displaylabel="["><span>[</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="]" data-skbtnuid="default-r1b12" data-displaylabel="]"><span>]</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="\" data-skbtnuid="default-r1b13" data-displaylabel="\"><span>\</span></div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-functionBtn hg-button-lock" data-skbtn="{lock}" data-skbtnuid="default-r2b0" data-displaylabel="caps"><span>caps</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="a" data-skbtnuid="default-r2b1" data-displaylabel="a"><span>a</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="s" data-skbtnuid="default-r2b2" data-displaylabel="s"><span>s</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="d" data-skbtnuid="default-r2b3" data-displaylabel="d"><span>d</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="f" data-skbtnuid="default-r2b4" data-displaylabel="f"><span>f</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="g" data-skbtnuid="default-r2b5" data-displaylabel="g"><span>g</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="h" data-skbtnuid="default-r2b6" data-displaylabel="h"><span>h</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="j" data-skbtnuid="default-r2b7" data-displaylabel="j"><span>j</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="k" data-skbtnuid="default-r2b8" data-displaylabel="k"><span>k</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="l" data-skbtnuid="default-r2b9" data-displaylabel="l"><span>l</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn=";" data-skbtnuid="default-r2b10" data-displaylabel=";"><span>;</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="'" data-skbtnuid="default-r2b11" data-displaylabel="'"><span>'</span></div>
				<div class="hg-button hg-functionBtn hg-button-enter" data-skbtn="{enter}" data-skbtnuid="default-r2b12" data-displaylabel="< enter"><span>&lt; enter</span></div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-functionBtn hg-button-shift" data-skbtn="{shift}" data-skbtnuid="default-r3b0" data-displaylabel="shift"><span>shift</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="z" data-skbtnuid="default-r3b1" data-displaylabel="z"><span>z</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="x" data-skbtnuid="default-r3b2" data-displaylabel="x"><span>x</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="c" data-skbtnuid="default-r3b3" data-displaylabel="c"><span>c</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="v" data-skbtnuid="default-r3b4" data-displaylabel="v"><span>v</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="b" data-skbtnuid="default-r3b5" data-displaylabel="b"><span>b</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="n" data-skbtnuid="default-r3b6" data-displaylabel="n"><span>n</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="m" data-skbtnuid="default-r3b7" data-displaylabel="m"><span>m</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="," data-skbtnuid="default-r3b8" data-displaylabel=","><span>,</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="." data-skbtnuid="default-r3b9" data-displaylabel="."><span>.</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="/" data-skbtnuid="default-r3b10" data-displaylabel="/"><span>/</span></div>
				<div class="hg-button hg-functionBtn hg-button-shift" data-skbtn="{shift}" data-skbtnuid="default-r3b11" data-displaylabel="shift"><span>shift</span></div>
			</div>
			<div class="hg-row">
				<div class="hg-button hg-standardBtn" data-skbtn=".com" data-skbtnuid="default-r4b0" data-displaylabel=".com"><span>.com</span></div>
				<div class="hg-button hg-standardBtn" data-skbtn="@" data-skbtnuid="default-r4b1" data-displaylabel="@"><span>@</span></div>
				<div class="hg-button hg-functionBtn hg-button-space" data-skbtn="{space}" data-skbtnuid="default-r4b2" data-displaylabel=" "><span> </span></div>
			</div>
		</div>
	</div>
</template>
<script>
	import 'simple-keyboard/build/css/index.css';
	export default {
		methods : {
			
		},
		data (){
			return{
				
			}
		}
	}
</script>

<style>

</style>

