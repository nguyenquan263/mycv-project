<script>
	import ContactCard from "./ContactCard.svelte";

  let name = "Quan";
  let title = "";
  let image = "";
  let description = "";
  let formState = 'empty';

  let createdContacts = [];
  let createdContact;
  let temp = [];

  function addContact() {
    if (name.trim().length == 0 || 
    title.trim().length == 0 ||
    image.trim().length == 0 ||  
    description.trim().length == 0) {
      formState = 'invalid';
      return;
    }

    createdContact = {
      name: name,
      jobTitle: title,
      imageUrl: image,
      desc: description
    };

    createdContacts = [
    ...createdContacts,  
    {
      id: Math.random(),
      name: name,
      jobTitle: title,
      imageUrl: image,
      desc: description
    }];

    // createdContacts.push({
    //   name: name,
    //   jobTitle: title,
    //   imageUrl: image,
    //   desc: description
    // });

    // temp = createdContacts;

    formState = 'done';
  }

  function deleteFirst() {
    createdContacts = createdContacts.slice(1);

  }

  function deleteLast() {
    createdContacts = createdContacts.slice(0, -1);
  }
</script>

<style>
#form {
  width: 30rem;
  max-width: 100%;
}
</style>

<div id="form">
<div class="form-control">
  <label for="userName">User Name</label>
  <input type="text" bind:value={name} id="userName" />
</div>
<div class="form-control">
  <label for="jobTitle">Job Title</label>
  <input type="text" bind:value={title} id="jobTitle" />
</div>
<div class="form-control">
  <label for="image">Image URL</label>
  <input type="text" bind:value={image} id="image" />
</div>
<div class="form-control">
  <label for="desc">Description</label>
  <textarea rows="3" bind:value={description} id="desc" />
</div>
</div>

<button on:click="{addContact}">Add Contact Card</button>
<button on:click="{deleteFirst}">Delete First</button>
<button on:click="{deleteLast}">Delete Last</button>

<!-- {#if formState === 'done'}
<ContactCard userName={createdContact.name} 
jobTitle={createdContact.jobTitle} 
description={createdContact.desc} 
userImage={createdContact.imageUrl} />
{:else if formState === 'invalid'}
<p>Invalid input.</p>
{:else}
<p>Please enter some data and hit the above button.</p>
{/if} -->

{#each createdContacts as createdContact, i (createdContact.id)}
  <h2># {i+1}</h2>
	<ContactCard userName={createdContact.name} 
	  jobTitle={createdContact.jobTitle} 
	  description={createdContact.desc} 
    userImage={createdContact.imageUrl} 
  />
{:else}
  <p>Please start to add some card :D</p>
{/each}