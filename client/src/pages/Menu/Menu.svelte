<script>
    import categories from "../../store/menu.js";
    import Category from "../../components/Category/Category.svelte";
    let chosenCategory = categories[0];

    function changeCategory(category){
        chosenCategory = category;
    }
</script>

<h1>Menu</h1>
<span>Click on an item to add it to your order</span>
<br>
{#each categories as category}
    <button on:click={() => changeCategory(category)}>{category.name}</button>
{/each}
<Category {...chosenCategory}/>

<style>
    *{
        color: orange;
    }
    h1{
        margin: 0;
        margin-top: 10px;
    }
    button{
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 10px;
		margin: 10px;
        margin-bottom: 0;
		background-color: transparent;
	}
    button:focus{
        background-color: #333;
    }
</style>