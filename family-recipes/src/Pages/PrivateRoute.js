import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem("token")) {
					return <Component {...props} />;
				} else {
					console.log(localStorage.getItem("token"));
				}
			}}
		/>
	);
};

export default PrivateRoute;
