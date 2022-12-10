<script>
module.exports = {
	props: [
		"realname",
		"nickname",
		"weapons",
		"force",
		"ranking",
		"content",
		"ending",
		"character",
		"plots",
	],
	data() {
		return {
			name: "Hello World!",
		};
	},
};
</script>

<template>
	<div class="card">
		<h1>{{ realname }}</h1>
		<div><b>绰号：</b>{{ nickname }}<b>武器：</b>{{ weapons }}</div>
		<div><b>武力值：</b>{{ force }}<b>梁山排名：</b>{{ ranking }}</div>
		<div>
			<b>内容：</b>
			<pre>{{ content }}</pre>
		</div>
		<div><b>结局：</b>{{ ending }}</div>
		<div><b>性格特点：</b>{{ character }}</div>
		<div><b>相关情节：</b>{{ plots }}</div>
	</div>
</template>
