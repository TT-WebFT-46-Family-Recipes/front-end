import React, { useEffect, useState } from "react";
import Header from "../Header";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
import img from "../../Assets/loginbackground.jpg";
import * as yup from "yup";
import schema from "./formSchema";
import axios from "axios";

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
	const [loginValidated, setLoginValidated] = useState(false);
	const [registerValidated, setRegisterValidated] = useState(false);
	const [registerFormOpen, setRegisterFormOpen] = useState(false);

	const [attemptMsg, setAttemptMsg] = useState({
		success: false,
		formValidationFailed: false,
		userNotFound: false,
		incorrectPassword: false,
		userAlreadyExists: false,
	});

	const showRegisterForm = () => {
		setRegisterFormOpen((registerFormOpen) => !registerFormOpen);
	};

	useEffect(() => {
		if (registerFormOpen) {
			setLoginFormVals({ username: "", password: "" });
			setAttemptMsg({
				success: false,
				formValidationFailed: false,
				userNotFound: false,
				incorrectPassword: false,
				userAlreadyExists: false,
			});
		} else {
			setRegisterFormVals({ username: "", password: "" });
			setAttemptMsg({
				success: false,
				formValidationFailed: false,
				userNotFound: false,
				incorrectPassword: false,
				userAlreadyExists: false,
			});
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
			axios
				.post(
					"https://tt-webft-46-family-recipes.herokuapp.com/api/auth/login",
					loginFormVals
				)
				.then((res) => {
					console.log(res);
					localStorage.setItem("token", JSON.stringify(res.data));
					setLoginFormVals({ username: "", password: "" });
					signIn((signedIn) => !signedIn);
				})
				.catch((err) => {
					console.log({ err });
					setLoginFormVals({ username: "", password: "" });
					// something that changes the placeholder for whatever the message error is
				});
		} else {
			setAttemptMsg({ ...attemptMsg, formValidationFailed: true });
			setLoginFormVals({ username: "", password: "" });
		}
	};

	const register = (evt) => {
		evt.preventDefault();
		if (registerValidated) {
			axios
				.post(
					"https://tt-webft-46-family-recipes.herokuapp.com/api/auth/register",
					registerFormVals
				)
				.then((res) => {
					localStorage.setItem("token", JSON.stringify(res.data));
					setRegisterFormVals({ username: "", password: "" });
					signIn((signedIn) => !signedIn);
				})
				.catch((err) => {
					console.log({ err });
					setRegisterFormVals({ username: "", password: "" });
					// something that changes the placeholder for whatever the message error is
				});
		} else {
			setAttemptMsg({ ...attemptMsg, formValidationFailed: true });
			setRegisterFormVals({ username: "", password: "" });
		}
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
					attemptMsg={attemptMsg}
				/>
			</StyledLoginPage>
		</>
	);
};

export default LoginPage;
