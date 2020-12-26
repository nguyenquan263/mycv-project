<script>
	import CustomInput from "./CustomInput.svelte";
	import Toggle from "./Toggle.svelte";
	import {isValidEmail} from './validation';
 
	let val = "quan";
	let selectedOption = 1;
	let price;
	let argreed;
	let favColor = 'red';
	let types = ['A'];
	let singleFavColor = 'red';
	let customInput;
	let enteredEmail = "";
	let formIsValid = false;

	$: if (isValidEmail(enteredEmail)) {
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	$: console.log(val);
	$: console.log(selectedOption);
	$: console.log(price);
	$: console.log(argreed);
	$: console.log(favColor);
	$: console.log(types);
	$: console.log(singleFavColor);
	$: console.log(customInput);

	


	function setValue(event) {
		val = event.target.value;
	}

	let userNameInput;

	function saveData() {
		// console.log(document.querySelector('#username').value);
		console.log(userNameInput.value);
		userNameInput.value = "changed";

		customInput.empty();
	}
</script>

<style>
	.invalid {
		border: 1px solid red;
	}
</style>

<!-- <input type="text" value={val} on:input="{setValue}">
<h1>{val}</h1> -->

<CustomInput bind:val bind:this={customInput}/>

<Toggle bind:chosenOption={selectedOption}/>

<input type="number" bind:value={price} />

<label for="">
	<input type="checkbox" bind:checked="{argreed}">
	Argree to term?
</label>

<h1>Farvorite Color?</h1>
<label for="">
	<input type="radio" 
		name="color" 
		value="red"
		bind:group={favColor}>
	Red
</label>
<label for="">
	<input type="radio" 
		name="color" 
		value="green"
		bind:group={favColor}>
	Green
</label>
<label for="">
	<input type="radio" 
		name="color" 
		value="blue"
		bind:group={favColor}>
	Blue
</label>

<h1>Which type do you like?</h1>
<label>
	<input type="checkbox" value="A" bind:group="{types}">
	A
</label>
<label>
	<input type="checkbox" value="B" bind:group="{types}">
	B
</label>
<label>
	<input type="checkbox" value="C" bind:group="{types}">
	C
</label>
<label>
	<input type="checkbox" value="D" bind:group="{types}">
	D
</label>

<h1>
	Which single color do you like?
</h1>
<select bind:value="{singleFavColor}">
	<option value="green">green</option>
	<option value="red">red</option>
	<option value="blue">blue</option>
</select>

<hr>

<input type="text" id="username" bind:this={userNameInput}>
<button on:click={saveData}>Save</button>


<form on:submit|preventDefault>
	<input type="email" 
		bind:value="{enteredEmail}"
		class={isValidEmail(enteredEmail) ? '' : 'invalid'}>
	<button type="submit" disabled={!formIsValid}>Save</button>
</form>


