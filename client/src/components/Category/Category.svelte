<script>
    export let name, items;
    import Item from "../Item/Item.svelte";
</script>

<category>
    <h1>{name}</h1>
    <items>
        {#if items}
            {#each items as item}
                <Item {item}/>
            {/each}
        {:else}
            <h2>No Items</h2>
        {/if}
    </items>
    <hr>
</category>

<style>
    h1{
        margin: 10px 0;
    }
    h2{
        color: white;
    }
    hr{
        margin-top: 20px;
        color: orange;
        border-top: 2px solid orange;
        border-bottom: none;
    }
</style>