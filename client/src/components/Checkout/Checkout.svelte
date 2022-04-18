<script>
    import order from "../../store/order.js";
    import {Router, Link } from "svelte-navigator";
</script>

<!-- svelte-ignore component-name-lowercase -->
<checkout>
    <span>Your Order</span>
    <br>
    {$order.itemCount} Items
    <br>
    <Router>
        <Link to="/order"><button>Check Out</button></Link>
    </Router>
</checkout>

<style>
    checkout{
        position: absolute;
        z-index: 1;
        right: 10%;
        text-align: right;
        font-weight: bold;
        color: white;
    }
    span{
        color: orange;
    }
    button{
        color: orange;
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 10px;
        margin-top: 5px;
        padding: 5px 10px;
		background-color: transparent;
	}
    button:focus{
        background-color: #333;
    }
</style>