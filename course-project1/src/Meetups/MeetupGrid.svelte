<script>
    import { createEventDispatcher } from 'svelte'
    import Button from '../UI/Button.svelte';
    import MeetupItem from './MeetupItemComponent.svelte';
    import MeetupFilter from './MeetupFilter.svelte';
    import MeetupDetail from './MeetupDetail.svelte';
    export let meetups;

    let favsOnly = false;

    const dispatcher = new createEventDispatcher();

    function setFilter(event) {
        favsOnly = event.detail === 1;
    }

    $:filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

</script>

<style>
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    #meetup-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }

</style>

<section id="meetup-controls">
    <MeetupFilter on:select={setFilter}/>

    <Button on:click={()=> dispatcher('add')}>New Meetup</Button>
</section>

<section id="meetups">
	{#each filteredMeetups as meetup}
        <MeetupItem 
            id={meetup.id}
			title={meetup.title}
			subtitle={meetup.subtitle}
			imageUrl={meetup.imageUrl}
			description={meetup.description}
			email={meetup.email}
            address={meetup.address}
            isFav={meetup.isFavorite}
            on:showdetails
            on:edit
		/>
	{/each}
</section>