import React, { useState } from "react";
import StyledForm from "./StyledForm";

export const LoginForm = ({
	loginFormChange,
	registerFormChange,
	loginVals,
	registerVals,
	logIn,
	register,
}) => {
	const [clicked, setClicked] = useState(false);

	// used to set css classes and do things like: hide/show drawer which contains register form
	const click = () => {
		setClicked(!clicked);
	};

	const updateVals = (evt) => {
		// name === 'username' or 'password' means existing user is logging in else a new user is registering
		if (evt.target.name === "username" || evt.target.name === "password")
			loginFormChange(evt.target.name, evt.target.value);
		else registerFormChange(evt.target.name, evt.target.value);
	};

	return (
		<StyledForm clicked={clicked}>
			<div
				className={clicked ? "form-toggle visible" : "form-toggle"}
				onClick={clicked ? click : null}
			></div>
			<div
				className={clicked ? "form-panel one hidden" : "form-panel one"}
			>
				<h2 className="title">Sign in</h2>
				<form onSubmit={logIn}>
					<input
						className="inputs"
						type="text"
						placeholder="Username"
						name="username"
						value={loginVals.username}
						onChange={updateVals}
					></input>
					<input
						className="inputs"
						type="password"
						placeholder="Password"
						name="password"
						value={loginVals.password}
						onChange={updateVals}
					></input>
					<button>Sign in</button>
					<span onClick={click}>Register?</span>
				</form>
			</div>
			<div
				className={clicked ? "form-panel two active" : "form-panel two"}
				onClick={clicked ? null : click}
			>
				<h2 className="titleRegister">Sign Up</h2>
				<form onSubmit={register}>
					<input
						className="inputsRegister"
						type="text"
						placeholder="Username"
						name="newUserUn"
						value={registerVals.newUserUn}
						onChange={updateVals}
					></input>
					<input
						className="inputsRegister"
						type="text"
						placeholder="Password"
						name="newUserPass"
						value={registerVals.newUserPass}
						onChange={updateVals}
					></input>
					<button className="btnRegister">Submit!</button>
				</form>
			</div>
		</StyledForm>
	);
};
