<script>
    import {Route} from "svelte-navigator";
    import LoginSignup from "../../pages/Login/LoginSignup.svelte";
    import {user} from "../../store/accessStore.js";
    export let path, component;
</script>

{#if $user !== undefined}
    <Route {path} {component}/>
{:else}
    <Route {path} component={LoginSignup}/>
{/if}

