import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/Login_Register/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useState } from "react";

import React from "react";
import RecipeEntry from "./Pages/recipeForm/RecipeEntry";

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<Router>
			<Switch>
				<Route path="/dashboard">
					<Dashboard signedIn={signedIn} signIn={setSignedIn} />
				</Route>
				<Route path="/newrecipe">
					<RecipeEntry />
				</Route>
				<Route path="/">
					<LoginPage signedIn={signedIn} signIn={setSignedIn} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
