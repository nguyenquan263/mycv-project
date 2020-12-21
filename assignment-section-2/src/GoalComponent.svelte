<script>
    export let hasExclamanation;
    export let userInput = '';
    $: console.log(hasExclamanation);
</script>
<style>
	.text-red {
		color: red;
	}
</style>
<h1 class:text-red = "{hasExclamanation}">{userInput}</h1>