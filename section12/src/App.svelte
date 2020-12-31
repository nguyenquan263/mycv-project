<script>
    import { writable } from 'svelte/store';
    import { tweened } from 'svelte/motion';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { fade, fly, scale, slide } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    import Spring from './Spring.svelte';

    let boxInput = '';
    let showParagraph = false;

    const progress = tweened(0, {
        delay: 0,
        duration: 700,
        easing: cubicOut
    });

    setTimeout(() => {
        progress.set(0.5);
    }, 1500);

    let boxes = [];

    function addBox() {
        // boxes = [...boxes, boxInput.value];

        boxes = [boxInput.value, ...boxes];
    }

    function discard(value) {
        
        // console.log(value);
        boxes = boxes.filter(el => {
            // console.log(el);
            return el !== value;
        });
        // console.log(boxes);
    }
</script>

<style>
    div {
        width: 10rem;
        height: 10rem;
        background-color: #ccc;
        margin: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        padding: 1rem;
    }
</style>

<button 
    on:click={() => {showParagraph = !showParagraph}
    }>Toggle</button>

{#if showParagraph}
<p in:fade out:fly={{x: 600}}>Can you see me?</p>
{/if}

<hr>

<input type="text" bind:this={boxInput}>
<button on:click="{addBox}">Add</button>



{#each boxes as box (box)}
    <div 
        transition:fly={{easing: cubicIn, x: 300, y: 300}}
        on:click={discard.bind(this, box)}
        on:introstart={()=>console.log("adding start")}
        on:introend={()=>console.log("adding end")}
        on:outrostart={()=>console.log("ending start")}
        on:outroend={()=>console.log("ending end")}
        animate:flip={{duration: 300}}>{box}</div>
{/each}

<!-- <progress value={$progress}></progress> -->
<!-- <Spring /> -->


