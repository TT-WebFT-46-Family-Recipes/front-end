import React from "react";
import StyledForm from "./StyledForm";

export const LoginForm = ({
	update,
	loginVals,
	registerVals,
	logIn,
	register,
	registerFormOpen,
	showRegisterForm,
	attemptMsg,
}) => {
	const updateVals = (evt) => {
		update(evt.target.name, evt.target.value);
	};

	const {
		formValidationFailed,
		incorrectCredentials,
		userAlreadyExists,
	} = attemptMsg;

	let userNamePlaceholder = "";
	let passwordPlaceholder = "";

	if (formValidationFailed) {
		userNamePlaceholder = "At least 6 characters!";
		passwordPlaceholder = "At least 8 characters!";
	} else if (incorrectCredentials) {
		userNamePlaceholder = "One of these is wrong!";
		passwordPlaceholder = "Try again?";
	} else if (userAlreadyExists) {
		userNamePlaceholder = "Username already exists!";
		passwordPlaceholder = "Try again?";
	} else {
		userNamePlaceholder = "Username";
		passwordPlaceholder = "Password";
	}

	return (
		<StyledForm registerFormOpen={registerFormOpen}>
			<div
				className={
					registerFormOpen ? "form-toggle visible" : "form-toggle"
				}
				onClick={registerFormOpen ? showRegisterForm : null}
			></div>
			<div
				className={
					registerFormOpen
						? "form-panel one hidden"
						: "form-panel one"
				}
			>
				<h2 className="title">Sign in</h2>
				<form onSubmit={logIn}>
					<input
						className="inputs"
						type="text"
						placeholder={userNamePlaceholder}
						name="username"
						value={loginVals.username}
						onChange={updateVals}
						onFocus={(evt) => {
							evt.target.placeholder = "";
						}}
						onBlur={(evt) => {
							evt.target.placeholder = userNamePlaceholder;
						}}
					></input>
					<input
						className="inputs"
						type="password"
						placeholder={passwordPlaceholder}
						name="password"
						value={loginVals.password}
						onChange={updateVals}
						onFocus={(evt) => {
							evt.target.placeholder = "";
						}}
						onBlur={(evt) => {
							evt.target.placeholder = passwordPlaceholder;
						}}
					></input>
					<button>Sign in</button>
					<span onClick={showRegisterForm}>Register?</span>
				</form>
			</div>
			<div
				className={
					registerFormOpen
						? "form-panel two active"
						: "form-panel two"
				}
				onClick={registerFormOpen ? null : showRegisterForm}
			>
				<h2 className="titleRegister">Sign Up</h2>
				<form onSubmit={register}>
					<input
						className="inputsRegister"
						type="text"
						placeholder={userNamePlaceholder}
						name="newUserUn"
						value={registerVals.username}
						onChange={updateVals}
						onFocus={(evt) => {
							evt.target.placeholder = "";
						}}
						onBlur={(evt) => {
							evt.target.placeholder = userNamePlaceholder;
						}}
					></input>
					<input
						className="inputsRegister"
						type="text"
						placeholder={passwordPlaceholder}
						name="newUserPass"
						value={registerVals.password}
						onChange={updateVals}
						onFocus={(evt) => {
							evt.target.placeholder = "";
						}}
						onBlur={(evt) => {
							evt.target.placeholder = passwordPlaceholder;
						}}
					></input>
					<button className="btnRegister">Submit!</button>
				</form>
			</div>
		</StyledForm>
	);
};
