<script>
    import userAPI from "../../scripts/userAPI.js";
    import Toast from "../../components/Toast/Toast.svelte";
    import {notifications} from "../../store/toasts.js";
    import {user} from "../../store/accessStore.js";
    import {navigate} from "svelte-navigator";
    let signupUsername, signupEmail, signupPassword;
    let loginUsername, loginPassword;
    let signupMessage, signupMessageColor;
    let loginMessage, loginMessageColor;

    async function signUp(){
        const user = {
            username: signupUsername,
            email: signupEmail,
            password: signupPassword
        };
        console.log(user);
        const response = await userAPI.create(user);
        if(response.error){
            signupMessageColor = "red";
            signupMessage = response.error;
            notifications.danger(response.error, 10000);
        }else{
            let sucessMessage = `Created user: ${user.username}`;
            signupMessageColor = "white"
            signupMessage = sucessMessage;
            notifications.success(sucessMessage, 10000);
        }
        console.log(response);
    }

    async function login(){
        const loginUser = {
            username: loginUsername,
            password: loginPassword
        };

        const response = await userAPI.login(loginUser);

        if(response.error){
            loginMessageColor = "red";
            loginMessage = response.error;
            notifications.danger(response.error, 10000);

        }else{
            loginMessageColor = "white"
            loginMessage = response.message;
            notifications.success(response.message, 10000);

            sessionStorage.setItem("user", loginUser.username);
            user.set(sessionStorage.getItem("user"));

            setTimeout( () => {
                navigate("/profile", {replace:true});
            }, 0);

        }
    }

</script>

<login>
    <Toast/>
    <h1>Log In</h1>
    <table>
        <tr>
            <td>Username:</td>
            <td><input type="text" bind:value={loginUsername}/></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" bind:value={loginPassword}/></td>
        </tr>
        {#if loginMessage}
        <tr>
            <td colspan="2" style="color: {loginMessageColor};">{loginMessage}</td>
        </tr>
        {/if}
        <tr>
            <td colspan="2"><button on:click={login}>Log In</button></td>
        </tr>
    </table>
    <hr>
    <h1>Sign Up</h1>
    <table>
        <tr>
            <td>Username:</td>
            <td><input type="text" bind:value={signupUsername}/></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="email" bind:value={signupEmail}/></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" bind:value={signupPassword}/></td>
        </tr>
        {#if signupMessage}
        <tr>
            <td colspan="2" style="color: {signupMessageColor};">{signupMessage}</td>
        </tr>
        {/if}
        <tr>
            <td colspan="2"><button on:click={signUp}>Sign Up</button></td>
        </tr>
    </table>
    
</login>

<style>

    input{
        color: white;
        background-color: black;
        border: 2px solid orange;
    }
    hr{
        margin-top: 20px;
        color: orange;
        border-top: 2px solid orange;
        border-bottom: none;
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

    td{
        justify-content: center;
    }
</style>