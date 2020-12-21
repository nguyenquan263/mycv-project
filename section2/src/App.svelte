<script>
	import ContactCard from './ContactCard.svelte';
	export let name = "Quan";
	export let jobTitle = 90;
	export let description = "Just for fun";
	export let userImage = "";

	$: nameUpperCase = name.toUpperCase();

	$: console.log(name);

	$: if (name === "Unknown") {
		
	}

	function changeName(event) {
		name = event.target.value;
	}

	function changeNameToUnknown() {
		name = "Unknown";
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>
<h1>Hello world: this is my card maker</h1>
<!-- <p>He has age of {jobTitle}</p> -->
<!-- Alternative way for 2-ways binding -->
<!-- <input type="text" value="{name}" on:input="{changeName}"> -->

<!-- this is two-way binding -->
Name: <input type="text" bind:value="{name}">
<br>
Image: <input type="text" bind:value="{userImage}">
<br>
Job Title: <input type="text" bind:value="{jobTitle}">
<br>
Description: <textarea rows="3" bind:value="{description}"></textarea>

<ContactCard 
	userName="{name}" 
	jobTitle="{jobTitle}" 
	{description}
	userImage="{userImage}"/>
