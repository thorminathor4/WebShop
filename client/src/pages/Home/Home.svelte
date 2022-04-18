<script>
    import {onMount} from 'svelte';
    //import menuCategories from "../../store/menu.js";
    import Category from "../../components/Category/Category.svelte";
    import Item from "../../components/Item/Item.svelte";
    import productAPI from "../../scripts/productAPI.js";
    import categoryAPI from "../../scripts/categoryAPI.js";
    let items, menuCategories;
    onMount(async () => {
        console.log("On Mount");
        // const products = await productAPI.getAll();
        // console.log(products);
        menuCategories = await categoryAPI.getAll();
        //console.log(menuCategories);
    })
</script>

<h1>Home</h1>
<span>Click on an item to add it to your order</span>
<!-- svelte-ignore component-name-lowercase -->
<br>
<!-- {#if item}
    <Item {item}/>  
{/if} -->
<categories>
    {#if menuCategories}
        {#each menuCategories as menuCategory}
            <Category name={menuCategory.name} items={menuCategory.items}/>
        {/each}
    {/if}
</categories>

<style>
    span{
        color: orange;
    }
    h1{
        margin: 0;
        margin-top: 10px;
    }
</style>