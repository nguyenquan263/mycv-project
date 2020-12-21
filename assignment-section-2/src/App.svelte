<style>
	.text-red {
		color: red;
	}
</style>
<script>
	import GoalComponent from './GoalComponent.svelte';
	export let userInput;

	let hasExclamanation = false;

	$: if (userInput.indexOf('!') != -1) {
		hasExclamanation = true;
	} else {
		hasExclamanation = false;
	}
</script>

Enter your goal in this course: <input type="text" bind:value="{userInput}">
<GoalComponent {hasExclamanation} {userInput}/>