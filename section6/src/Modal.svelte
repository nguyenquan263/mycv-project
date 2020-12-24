<script>
  import {createEventDispatcher, 
      onMount, 
      onDestroy,
      beforeUpdate,
      afterUpdate} from 'svelte';
 
  // export let content;

  let dispatch = new createEventDispatcher();
  let argreed = false;
  let autoscroll = false;

  console.log("scripting");

  onMount(() => {
    console.log("on mount!");
  });

  onDestroy(function() {
    console.log("on destroy!");
  });

  beforeUpdate(() => {
    console.log("be4 update");
    autoscroll = argreed;
  });

  afterUpdate(function() {
    console.log("after update");

    if (autoscroll) {
      const modal = document.querySelector(".modal");
      modal.scrollTo(0, modal.scrollHeight);
    }
  });
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  padding: 1rem;
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  max-height: 15vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: scroll;
}

header {
  border-bottom: 1px solid #ccc;
}
</style>

<div class="backdrop" on:click="{() => dispatch('cancel')}"/>


<!-- <div class="modal">
  {@html content}
</div> -->

<div class="modal">
  <header>
    <slot name="header" />
  </header>
  <div class="content">
    <slot />
  </div>

  <div class="disclaimer">
    <p>Before you close, you need to argree to our term!</p>
    <button on:click="{() => {argreed = true}}">Argree</button>
  </div>

  <footer>
    <slot name="footer" didArgree={argreed}>
      <button 
        on:click="{() => dispatch('close')}" 
        disabled={!argreed}>Close</button>
    </slot>
  </footer>
 
</div>