<script>
	import Product from './Product.svelte';
	import CartItem from './CartItem.svelte';
	import FamilyNode from './FamilyNode.svelte';

	import Router, { link } from 'svelte-spa-router';
	import routes from './routes';

	let y;

	$:console.log(y);

	let familyStructure = [
		{
			isParent: true,
			name: 'Chris',
			children: [
				{
					isParent: true,
					name: "Moe",
					children: [
						{
							isParent : false,
							name: 'Julie'
						}
					]
				}
			]
		},
		{
			isParent: false,
			name: 'Anna'
		}
	]

	let renderedComponent = {cmp: Product, title: 'Test Product', id: 'p1'};

	function toggle() {
		if (renderedComponent.cmp === Product) {
			renderedComponent = {cmp: CartItem, title: 'Another Product', id: 'p2'};
		} else {
			renderedComponent = {cmp: Product, title: 'Test Product', id: 'p1'};
		}
	}
</script>

<svelte:head>
	<title>Hihi</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>

<button on:click={toggle}>Toggle Display</button>

<svelte:component 
	this={renderedComponent.cmp} 
	title={renderedComponent.title}
	id={renderedComponent.id}/>

{#each familyStructure as familyMember}
	<FamilyNode member={familyMember}/>
{/each}

<a href="/page1" use:link>go to page 1</a>

<Router {routes} />
