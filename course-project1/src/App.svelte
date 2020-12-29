<script>
	import meetups from './Meetups/meetup-store';
	import Header from './UI/Header.svelte';
	import MeetupGrid from './Meetups/MeetupGrid.svelte';
	import TextInput from './UI/TextInput.svelte';
	import Button from './UI/Button.svelte';

	import EditMeetup from './Meetups/EditMeetup.svelte'
	import MeetupDetail from './Meetups/MeetupDetail.svelte';


	let title = '';
	let subtitle = '';
	let address = '';
	let email = '';
	let description = '';
	let imageUrl =  '';
	
	// let meetups = store_meetups;

	let editMode = null;
	let editedId = null;

	let page = 'overview';
	let pageData = {};

	function saveMeetup(event) {
		// var willBeAdded = event.detail;
		// let meetupData = {
		// 	title: willBeAdded.title,
		// 	subtitle: willBeAdded.subtitle,
		// 	description: willBeAdded.description,
		// 	imageUrl: willBeAdded.imageUrl,
		// 	contactEmail: willBeAdded.email,
		// 	address: willBeAdded.address
		// };
		// meetups.addMeetup(meetupData);
		editMode = null;
		editedId = null;
	}

	function toggleFavorite(event) {
		var id = event.detail;
		meetups.toggleFavorite(id);
	}

	function cancelEdit() {
		editMode = null;
		editedId = null;
	}

	function showDetails(event) {
		page = "detail";
		pageData.id = event.detail;
	}

	function startEdit(event) {
		editMode = 'edit';
		editedId = event.detail;
	}
</script>
<style>
	main {
		margin-top: 5rem;
	}

	/* .meetup-controls {
		margin: 1rem;
	} */
</style>

<Header />

<main>
	{#if page === 'overview'}
		<!-- <div class="meetup-controls"> -->
			<!-- <Button on:click={()=>{editMode = 'edit'}}>New Meetup</Button> -->
		<!-- </div> -->
		
			
		{#if editMode === 'edit'}
			<EditMeetup id={editedId} on:save="{saveMeetup}" on:cancel="{cancelEdit}"/>
		{/if}
		<!-- <MeetupGrid meetups={$meetups} on:toggle-favorite={toggleFavorite}/> -->
		<MeetupGrid 
			meetups={$meetups} 
			on:showdetails={showDetails} 
			on:edit={startEdit}
			on:add={() => {editMode = 'edit'}}/>
	{:else}
		<MeetupDetail id={pageData.id} on:close={() => {page = 'overview'}}/>
	{/if}
	
</main>




