<script>

    import {createEventDispatcher} from 'svelte';

    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';

    let title = '';
	let subtitle = '';
	let address = '';
	let email = '';
	let description = '';
    let imageUrl =  '';
    
    const dispatcher = new createEventDispatcher();

    function submitForm() {
        dispatcher('save', {
            title: title,
            subtitle: subtitle,
            address: address,
            email: email,
            description: description,
            imageUrl: imageUrl
        });
    }

    function cancel() {
        dispatcher("cancel");
    }
</script>

<style>
form {
    width: 100%;
}
</style>

<Modal title="Edit Meetup Data" on:cancel>
    <form on:submit|preventDefault="{submitForm}">
        <!-- <div class="form-control">
            <label for="title">Title: </label>
            <input type="text" id="title" bind:value="{title}">
        </div> -->
    
        <TextInput 
            id="title" 
            label="Title"
            value="{title}"
            on:input={(event) => {
                console.log(event.target.value);
                title = event.target.value;
            }}
        />
    
        <!-- <div class="form-control">
            <label for="subtitle">Subtitle: </label>
            <input type="text" id="subtitle" bind:value="{subtitle}">
        </div> -->
    
        <TextInput 
            id="subtitle" 
            label="Subtitle"
            value="{subtitle}"
            on:input={(event) => {
                console.log(event.target.value);
                subtitle = event.target.value;
            }}
        />
    
        <!-- <div class="form-control">
            <label for="address">Address: </label>
            <input type="text" id="address" bind:value="{address}">
        </div> -->
    
        <TextInput 
            id="address" 
            label="Address"
            value="{address}"
            on:input={(event) => {
                console.log(event.target.value);
                address = event.target.value;
            }}
        />
    
        <!-- <div class="form-control">
            <label for="imageUrl">Image URL: </label>
            <input type="text" id="imageUrl" bind:value="{imageUrl}">
        </div> -->
    
        <TextInput 
            id="imageUrl" 
            label="Image URL"
            value="{imageUrl}"
            on:input={(event) => {
                console.log(event.target.value);
                imageUrl = event.target.value;
            }}
        />
    
        <!-- <div class="form-control">
            <label for="email">Email: </label>
            <input type="text" id="email" bind:value="{email}">
        </div> -->
    
        <TextInput 
            id="email" 
            label="Email"
            value="{email}"
            on:input={(event) => {
                console.log(event.target.value);
                email = event.target.value;
            }}
        />
    
        <!-- <div class="form-control">
            <label for="description">Description: </label>
            <textarea rows="3" id="description" bind:value="{description}"></textarea>
        </div> -->
    
        <TextInput 
            id="description" 
            label="Description"
            value="{description}"
            controlType="textarea"
            on:input={(event) => {
                console.log(event.target.value);
                description = event.target.value;
            }}
        />
    </form>

    <div slot="footer">
        
        <Button type="button" on:click={submitForm}>Save</Button>
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    </div>
</Modal>
