<script>

export default {
	data() {
    return {
      name: 'Hello World!'
    }
  }
}
</script>

<template>
  <div>
 		<h1>${{ name }}</h1>
 		<h3>绰号：${{ name }}
 	</div>
</template>