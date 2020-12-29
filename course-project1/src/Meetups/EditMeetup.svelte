<script>

    import {createEventDispatcher} from 'svelte';

    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import {isEmpty, isValidEmail} from '../helpers/validation';

    let title = '';
    let titleValid = false;
    let subtitle = '';
    let subtitleValid = false;
    let address = '';
    let addressValid = false;
    let email = '';
    let emailValid = false;
    let description = '';
    let descriptionValid = false;
    let imageUrl =  '';
    let imageUrlValid = false;
    let formIsValid = false;
    
    const dispatcher = new createEventDispatcher();

    $: titleValid = !isEmpty(title); //tuc la false :)
    $: subtitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);
    $: imageUrlValid = !isEmpty(imageUrl);
    $: formIsValid = titleValid 
        && subtitleValid 
        && addressValid 
        && descriptionValid
        && imageUrlValid
        && emailValid;
    


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
            valid={titleValid}
            validityMessage="Please enter a valid title!"
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
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle!"
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
            valid={addressValid}
            validityMessage="Please enter a valid address!"
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
            valid={imageUrlValid}
            validityMessage="Please enter a valid image URL!"
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
            valid={emailValid}
            validityMessage="Please enter a valid email!"
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
            valid={descriptionValid}
            validityMessage="Please enter a valid description!"
            on:input={(event) => {
                console.log(event.target.value);
                description = event.target.value;
            }}
        />
    </form>

    <div slot="footer">
        
        <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    </div>
</Modal>
