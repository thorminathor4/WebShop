<script>
	import Checkout from "./components/Checkout/Checkout.svelte";
	import {Router, Link, Route} from "svelte-navigator";
	import Home from "./pages/Home/Home.svelte";
	import Menu from "./pages/Menu/Menu.svelte";
	import About from "./pages/About/About.svelte";
	import Order from "./pages/Order/Order.svelte";
	import Login from "./pages/Login/LoginSignup.svelte";
	import User from "./components/User/User.svelte";
	import Profile from "./pages/Profile/Profile.svelte";
	import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.svelte";
	//import Toasts from "./components/Toasts/Toasts.svelte";
	//let toastMessages;
</script>

<main>
	<!--<Toasts messages={toastMessages}/>-->
	<Checkout/>
	<User/>
	<Router>
		<Link to="/" class="link"><div><h1>🔥 Fire Fastfood 🔥</h1></div></Link>
		<nav>
			<Link to="/"><button>Home</button></Link>
			<Link to="/menu"><button>Menu</button></Link>
			<Link to="/about"><button>About</button></Link>
		</nav>
		<div class="content">
			<Route path="/" component={Home}/>
			<Route path="/menu" component={Menu}/>
			<Route path="/about" component={About}/>
			<Route path="/order" component={Order}/>
			<Route path="/login" component={Login}/>
			<ProtectedRoute path="/profile" component={Profile}/>
		</div>
	</Router>
</main>

<style>
	main *{
		color: orange;
		text-align: center;
		align-content: center;
		align-items: center;
	}
	h1{
		margin-top: 5px;
		font-size: 50px;
		text-align: center;
	}
	button{
		width: 150px;
		font-weight: bold;
		border: 2px solid orange;
		border-radius: 10px;
		margin: 0 10px;
		background-color: transparent;
		cursor: pointer;
	}
</style>