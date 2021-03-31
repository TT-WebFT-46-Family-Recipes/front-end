import React, { useState } from "react";
import Header from "../Header";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
import img from "../../Assets/loginbackground.jpg";
import { useHistory } from "react-router";

const StyledLoginPage = styled.section`
	background-image: url(${img});
	background-size: cover;
	background-position: 30% 70%;
	background-repeat: no-repeat;
	position: fixed;
	height: 100vh;
	width: 100%;
`;

const LoginPage = ({ signedIn, signOut }) => {
	const [loginFormVals, setLoginFormVals] = useState({
		username: "",
		password: "",
	});
	const [registerFormVals, setRegisterFormVals] = useState({
		newUserUn: "",
		newUserPass: "",
	});
	const [userLoggedIn, setUserLoggedIn] = useState({});
	const [newUser, setNewUser] = useState({});

	const history = useHistory();

	const updateLoginForm = (name, value) => {
		setLoginFormVals({ ...loginFormVals, [name]: value });
	};

	const updateRegisterForm = (name, value) => {
		setRegisterFormVals({ ...registerFormVals, [name]: value });
	};

	const logIn = (evt) => {
		evt.preventDefault();
		setUserLoggedIn({ ...loginFormVals });
		signOut(!signedIn);
		setLoginFormVals({ username: "", password: "" });
		history.push("/dashboard");
	};

	const register = (evt) => {
		evt.preventDefault();
		setNewUser({ ...registerFormVals });
		signOut(!signedIn);
		setRegisterFormVals({ newUserUn: "", newUserPass: "" });
		history.push("/dashboard");
	};

	return (
		<>
			<Header signedIn={signedIn} signOut={signOut} />
			<StyledLoginPage>
				<LoginForm
					loginFormChange={updateLoginForm}
					registerFormChange={updateRegisterForm}
					loginVals={loginFormVals}
					registerVals={registerFormVals}
					logIn={logIn}
					register={register}
				/>
			</StyledLoginPage>
		</>
	);
};

export default LoginPage;
