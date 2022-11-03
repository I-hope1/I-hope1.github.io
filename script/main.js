const { createApp } = Vue
// 从一个单文件组件中导入根组件
// import Card from './Card.vue'

const app = createApp({
	data(){
		return {}
	}
})
app.component('card', {
	props: ['realname', 'nickname', 'weapons', 'force', 'ranking', 'content', 'ending', 'character', 'plots'],
  // 组件的实现
	template: `
 <div class="card">
 		<h1>{{ realname }}</h1>
 		<div><b>绰号：</b>{{ nickname }}<b>武器：</b>{{ weapons }}</div>
	 	<div><b>武力值：</b>{{ force }}<b>梁山排名：</b>{{ ranking }}</div>
	 	<div><b>内容：</b><pre>{{ content }}</pre></div>
	 	<div><b>结局：</b>{{ ending }}</div>
	 	<div><b>性格特点：</b>{{ character }}</div>
	 	<div><b>相关情节：</b>{{ plots }}</div>
	 	
 	</div>
 `
})

app.mount(".main")

let style = document.createElement('style');

style.innerHTML = Array(document.querySelector("body > div > div.left").children.length).fill().map((e, i) => `input#left-tab${i}:checked~.content .cont${i} {
	display: block;
	animation: fadeIn .3s;
}
input#left-tab${i}:checked~.left label.tab${i} {
	background-color: rgba(0, 0, 0, .06);
	color: skyblue;
	text-shadow: 2px 2px 2px #85fdffbb;
}
input#left-tab${i}:checked~.left label.tab${i} i::after {
	background-color: skyblue;
	animation: i-show .1s forwards;
}
`).join('')
document.head.appendChild(style);
