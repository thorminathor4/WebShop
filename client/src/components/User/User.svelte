<script>
    import {Router, Link} from "svelte-navigator";
    import {user} from "../../store/accessStore.js";
    import {onMount} from 'svelte';
    onMount(async () => {
        user.set(sessionStorage.getItem("user"));
        console.log(typeof $user);
    })
</script>

<!-- svelte-ignore component-name-lowercase -->
<profile>
    <Router>
        <!-- <Link to="/login"><button>Log In</button></Link>
        <br>
        <Link to="/login"><button>Sign Up</button></Link> -->
        {#if $user != "undefined"}
            <h3>User</h3>
            <span>{$user}</span>
            <br>
            <Link to="/profile"><button>Profile</button></Link>
        {:else}
            <Link to="/login"><button>Log in<br>or<br>Sign Up</button></Link>
        {/if}
        <!-- <br>
        <Link to="/login"><button>Log in<br>or<br>Sign Up</button></Link> -->
        
    </Router>
</profile>

<style>
    profile{
        position: absolute;
        z-index: 1;
        right: 2%;
        text-align: right;
        font-weight: bold;
        color: white;
    }
    button{
        color: orange;
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 10px;
        margin-top: 5px;
        margin-bottom: 2px;
        padding: 5px 10px;
		background-color: transparent;
	}
    button:focus{
        background-color: #333;
    }
    h3{
        margin: 0;
        color: orange;
    }
</style>