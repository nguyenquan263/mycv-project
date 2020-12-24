<script>
	import { tick, afterUpdate} from 'svelte';
	import Modal from './Modal.svelte';
	import Product from './Product.svelte';

	let products = [
		{
			id: 'p1',
			title: 'A book',
			price: 9.99
		},
		{
			id: 'p2',
			title: 'A pen',
			price: 6.99
		},
		{
			id: 'p3',
			title: 'A pencil',
			price: 5.99
		}
	]

	function addToCart(event) {
		console.log(event.detail);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}

	let showModal = false;
	let closable = false;

	let text = 'this is dummy text';

	function transform(event) {

		console.log("haha");
		if (event.which !== 9) {
			return;
		}

		event.preventDefault();
		const selectionStart = event.target.selectionStart;
		const selectionEnd = event.target.selectionEnd;
		const value = event.target.value;

		text = value.slice(0, selectionStart) + 
			value.slice(selectionStart, selectionEnd).toUpperCase() +
			value.slice(selectionEnd);

		//wait for event update :D
		tick().then(function() {
			event.target.selectionStart = selectionStart;
			event.target.selectionEnd = selectionEnd;
		});
		
	}
	// not work!!!
	// afterUpdate(function() {
	// 	event.target.selectionStart = selectionStart;
	// 	event.target.selectionEnd = selectionEnd;
	// });

</script>

<!-- title="{product.title}"
price={product.price} 
use to pass arguments to subcomponent
-->

{#each products as product, i (product.id)}
	<Product 
	{...product}
	on:add-to-cart="{addToCart}"
	on:delete="{deleteProduct}"/>
{/each}


<button on:click="{()=> {showModal = true}}">Show Modal</button>

{#if showModal}
<!-- <Modal content="<h1>Hi</h1>"/> -->
<Modal 
	on:cancel="{() => showModal = false}"
	on:close="{() => showModal = false}"
	let:didArgree={closable}>
	<h1 slot="header">Hello!</h1>
	<h3>This work!</h3>
	<button slot="footer" 
		on:click="{() => showModal = false}" 
		disabled={!closable}>Confirm</button>
</Modal>
{/if}
<br>
<textarea rows="5" value={text} on:keydown={transform}></textarea>
