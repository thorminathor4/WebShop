<script>
    import {notifications} from "../../store/toasts.js";
    import {navigate} from "svelte-navigator";
    import userAPI from "../../scripts/userAPI.js";
    import Toast from "../../components/Toast/Toast.svelte";
    import {user} from "../../store/accessStore.js";

    let logoutMessage, logoutMessageColor;

    async function logout(){
        const response = await userAPI.logout();

        if(response.error){
            logoutMessageColor = "red";
            logoutMessage = response.error;
            notifications.danger(response.error, 10000);
        }else{
            logoutMessageColor = "white";
            logoutMessage = response.message;
            notifications.success(response.message, 10000);
        }

        sessionStorage.setItem("user", undefined);
        user.set(sessionStorage.getItem("user"));

        setTimeout( () => {
            navigate("/login", {replace:true});
        }, 0);
    }
</script>

<Toast/>

<h1>Profile</h1>

<table>
    <tr>
        <td><button on:click={logout}>Log Out</button></td>
    </tr>
    {#if logoutMessage}
        <tr>
            <td style="color: {logoutMessageColor};">{logoutMessage}</td>
        </tr>
    {/if}
</table>

<style>
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
</style>