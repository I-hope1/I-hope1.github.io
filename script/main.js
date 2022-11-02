const { createApp } = Vue
// 从一个单文件组件中导入根组件
// import Card from './Card.vue'

const app = createApp({
	data(){
		return {}
	}
})
app.component('card',{
	props: ['realname', 'nickname', 'weapons', 'force', 'ranking', 'content', 'ending', 'character', 'plots'],
  // 组件的实现
	template: `
 <div class="card">
 		<h1>{{ realname }}</h1>
 		<div><b>绰号：{{ nickname }}</b><b>武器：{{ weapons }}</b></div>
	 	<div><b>武力值：{{ force }}</b><b>梁山排名：{{ ranking }}</b></div>
	 	<div><b>内容：<pre class="content">{{ content.replace(/\\\\n/g, '\\n') }}</pre>
	 	<div><b>结局：{{ ending }}</b></div>
	 	<div><b>性格特点：{{ character }}</b></div>
	 	<div><b>相关情节：{{ plots }}</b></div>
	 	
 	</div>
 `
})

app.mount("#main")