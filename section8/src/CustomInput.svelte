<script>
    export let val;

    export function empty() {
        alert("tao dang empty ne");
        val = '';
    }
</script>

<input type="text" bind:value={val} />
