import React, { useEffect, useState } from "react";
import Header from "../Header";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
import img from "../../Assets/loginbackground.jpg";
import { useHistory } from "react-router";
import * as yup from "yup";
import schema from "./formSchema";

const StyledLoginPage = styled.section`
	background-image: url(${img});
	background-size: cover;
	background-position: 30% 70%;
	background-repeat: no-repeat;
	position: fixed;
	height: 100vh;
	width: 100%;
`;

const LoginPage = ({ signedIn, signIn }) => {
	const [loginFormVals, setLoginFormVals] = useState({
		username: "",
		password: "",
	});
	const [registerFormVals, setRegisterFormVals] = useState({
		username: "",
		password: "",
	});
	const [loginFormErrors, setLoginFormErrors] = useState({
		username: "username must be 6 characters long",
		password: "password must be 8 characters long",
	});
	const [registerFormErrors, setRegisterFormErrors] = useState({
		username: "username must be 6 characters long",
		password: "password must be 8 characters long",
	});
	const [userLoggedIn, setUserLoggedIn] = useState({});
	const [newUser, setNewUser] = useState({});
	const [loginValidated, setLoginValidated] = useState(false);
	const [registerValidated, setRegisterValidated] = useState(false);
	const [invalidAttempt, setInvalidAttempt] = useState(0);
	const [registerFormOpen, setRegisterFormOpen] = useState(false);

	const history = useHistory();

	// used to set css classes and do things like: hide/show drawer which contains register form
	const showRegisterForm = () => {
		setRegisterFormOpen((registerFormOpen) => !registerFormOpen);
	};

	useEffect(() => {
		if (registerFormOpen) {
			setLoginFormVals({ username: "", password: "" });
			setInvalidAttempt(0);
		} else {
			setRegisterFormVals({ username: "", password: "" });
			setInvalidAttempt(0);
		}
	}, [registerFormOpen]);

	const updateForm = (name, value) => {
		switch (name) {
			case "username":
			case "password":
				setLoginFormVals({
					...loginFormVals,
					[name]: value.replace(/\s+/g, ""),
				});
				break;
			case "newUserUn":
				name = "username";
				setRegisterFormVals({
					...registerFormVals,
					[name]: value.replace(/\s+/g, ""),
				});
				break;
			case "newUserPass":
				name = "password";
				setRegisterFormVals({
					...registerFormVals,
					[name]: value.replace(/\s+/g, ""),
				});
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		for (const key of Object.keys(loginFormVals))
			yup.reach(schema, key)
				.validate(loginFormVals[key])
				.then(() => {
					setLoginFormErrors(
						(loginFormErrors) =>
							(loginFormErrors = {
								...loginFormErrors,
								[key]: "",
							})
					);
				})
				.catch((err) => {
					setLoginFormErrors(
						(loginFormErrors) =>
							(loginFormErrors = {
								...loginFormErrors,
								[key]: err.errors[0],
							})
					);
				});
	}, [loginFormVals]);

	useEffect(() => {
		for (const key of Object.keys(registerFormVals))
			yup.reach(schema, key)
				.validate(registerFormVals[key])
				.then(() => {
					setRegisterFormErrors(
						(registerFormErrors) =>
							(registerFormErrors = {
								...registerFormErrors,
								[key]: "",
							})
					);
				})
				.catch((err) => {
					setRegisterFormErrors(
						(registerFormErrors) =>
							(registerFormErrors = {
								...registerFormErrors,
								[key]: err.errors[0],
							})
					);
				});
	}, [registerFormVals]);

	useEffect(() => {
		if (loginFormErrors.username === "" && loginFormErrors.password === "")
			setLoginValidated((loginValidated) => !loginValidated);
		if (
			registerFormErrors.username === "" &&
			registerFormErrors.password === ""
		)
			setRegisterValidated((registerValidated) => !registerValidated);
	}, [loginFormErrors, registerFormErrors, registerFormOpen]);

	const logIn = (evt) => {
		evt.preventDefault();
		if (loginValidated) {
			setUserLoggedIn({ ...loginFormVals });
			signIn((signedIn) => !signedIn);
			setLoginFormVals({ username: "", password: "" });
		} else {
			setInvalidAttempt((invalidAttempt) => (invalidAttempt += 1));
			setLoginFormVals({ username: "", password: "" });
		}
		// history.push("/dashboard");
	};

	const register = (evt) => {
		evt.preventDefault();
		if (registerValidated) {
			setNewUser({ ...registerFormVals });
			signIn((signedIn) => !signedIn);
			setRegisterFormVals({ username: "", password: "" });
		} else {
			setInvalidAttempt((invalidAttempt) => (invalidAttempt += 1));
			setRegisterFormVals({ username: "", password: "" });
		}
		// history.push("/dashboard");
	};

	return (
		<>
			<Header signedIn={signedIn} signIn={signIn} />
			<StyledLoginPage>
				<LoginForm
					update={updateForm}
					loginVals={loginFormVals}
					registerVals={registerFormVals}
					logIn={logIn}
					register={register}
					registerFormOpen={registerFormOpen}
					showRegisterForm={showRegisterForm}
					invalidAttempt={invalidAttempt}
				/>
			</StyledLoginPage>
		</>
	);
};

export default LoginPage;
