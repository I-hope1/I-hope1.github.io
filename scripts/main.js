const { createApp } = Vue


// 从一个单文件组件中导入根组件
httpVueLoader("./scripts/Card.vue")().then(v => {
	const app = createApp({
		data() {
			return {}
		},
		/* components: {
			// 将组建加入组建库
			'card': './Card.vue'
		} */
	})
	app.component('card', v)
	app.mount(".main")
});


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
