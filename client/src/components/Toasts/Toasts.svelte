<script>
    import Toast from "../Toast/MyToast.svelte";
    let messages;
</script>

<toasts>
    {#if messages}
        {#each messages as message}
            <Toast {message}/>
        {/each}
    {/if}
</toasts>

<style>
    toasts{
        position: fixed;
        z-index: 1;
        left: 0;
    }
</style>