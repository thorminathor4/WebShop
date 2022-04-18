<script>
    import order from "../../store/order.js";
    export let item;
    function addItemToOrder(item) {
        order.update(storeValue => {
            let foundEntry = storeValue.entries.find(entry => entry.item.id == item.id)
            if(foundEntry)
                foundEntry.amount++;
            else
                storeValue.entries.push({item, amount: 1});
            storeValue.itemCount++;
            return storeValue;
        });
    }
</script>

<item on:click={() => addItemToOrder(item)}>
    <h3>{item.name}</h3>
    <p>{item.info}</p>
    <div class="image">
    <img src={"./images/"+item.image} alt={item.name}>
    </div>
    <h3>{item.price.toFixed(2)} kr.</h3>
</item>

<style>
    item{
        width: 150px;
        border: 1px solid white;
        color: white;
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
    }
    h3{
        margin: 5px;
    }
    p{
        margin: 0;
        font-size: x-small;
    }
    img{
        max-width: 100px;
        max-height: 100px;
    }
    .image{
        height: 100px;
    }
</style>