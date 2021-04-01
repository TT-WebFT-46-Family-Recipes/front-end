import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Pages/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/Login_Register/LoginPage";
import RecipeEntry from "./Pages/recipeForm/RecipeEntry";

// const testing = (evt) => {
// 	evt.preventDefault();
// 	window.location.pathname = "login";
// };

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<Router>
			<Switch>
				<Route path="/newrecipe">
					<RecipeEntry />
				</Route>
				<PrivateRoute path="/dashboard">
					<Dashboard signedIn={signedIn} signIn={setSignedIn} />
				</PrivateRoute>
				<Route path="/login">
					{signedIn ? (
						<Dashboard signedIn={signedIn} signIn={setSignedIn} />
					) : (
						<LoginPage signedIn={signedIn} signIn={setSignedIn} />
					)}
				</Route>
				<Route path="/">
					<Link to="/login">Test</Link>
					{/* <a href="/login" onClick={testing}>
						Click me
					</a> */}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
