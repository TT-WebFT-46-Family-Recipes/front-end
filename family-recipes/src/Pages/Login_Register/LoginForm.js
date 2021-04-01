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
	invalidAttempt,
}) => {
	const updateVals = (evt) => {
		update(evt.target.name, evt.target.value);
	};

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
						placeholder={
							invalidAttempt === 0
								? "Username"
								: "At least 6 characters!"
						}
						name="username"
						value={loginVals.username}
						onChange={updateVals}
					></input>
					<input
						className="inputs"
						type="password"
						placeholder={
							invalidAttempt === 0
								? "Password"
								: "At least 8 characters!"
						}
						name="password"
						value={loginVals.password}
						onChange={updateVals}
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
						placeholder={
							invalidAttempt === 0
								? "Username"
								: "At least 6 characters!"
						}
						name="newUserUn"
						value={registerVals.username}
						onChange={updateVals}
					></input>
					<input
						className="inputsRegister"
						type="text"
						placeholder={
							invalidAttempt === 0
								? "Password"
								: "At least 8 characters!"
						}
						name="newUserPass"
						value={registerVals.password}
						onChange={updateVals}
					></input>
					<button className="btnRegister">Submit!</button>
				</form>
			</div>
		</StyledForm>
	);
};
