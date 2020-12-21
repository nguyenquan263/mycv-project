<script>
import { each } from 'svelte/internal';

	import PasswordComponent from './PasswordComponent.svelte';
	let inputPassword = '';
	let passwords = [];

	function addPassword() {
		passwords = [...passwords, {
			id: Math.random(),
			password: inputPassword
		}];

		console.log(passwords);
	}

	function passwordClickedListener(id) {
		console.log(id);

		let passwords1 = passwords;

		for (var i = 0; i < passwords1.length; i++){
			console.log(passwords1[i].id == id);
			if (passwords1[i].id == id) {
				passwords1.splice(i, 1);
			}
		}

		passwords = passwords1;
	}
</script>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>Add a password input field and save the user input in a variable.</li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>
<hr>
Password: <input type="password" bind:value="{inputPassword}">
{#if inputPassword.length < 5}
	<h5>Too short!</h5>
{:else if inputPassword.length > 10}
	<h5>Too long!</h5>
{:else}
	<br>
	You password is: <i>{inputPassword}</i>
	<br>
	<button on:click="{addPassword}">Add this password</button>
{/if}

{#each passwords as password, index (password.id)}
	<!-- <div on:click="{() => passwordClickedListener(password.id)}"> -->
	<div on:click="{passwordClickedListener.bind(this, password.id)}">
		<PasswordComponent 
			id="{password.id}" 
			password="{password.password}"
			/>
	</div>
	
{/each}

