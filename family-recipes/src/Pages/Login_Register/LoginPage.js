import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
import img from "../../Assets/loginbackground.jpg";

const StyledLoginPage = styled.section`
	background-image: url(${img});
	background-size: cover;
	background-position: 30% 70%;
	background-repeat: no-repeat;
	position: fixed;
	height: 100vh;
	width: 100%;
`;

const LoginPage = () => {
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

	const updateLoginForm = (name, value) => {
		setLoginFormVals({ ...loginFormVals, [name]: value });
	};

	const updateRegisterForm = (name, value) => {
		setRegisterFormVals({ ...registerFormVals, [name]: value });
	};

	const logIn = (evt) => {
		evt.preventDefault();
		setUserLoggedIn({ ...loginFormVals });
		setLoginFormVals({ username: "", password: "" });
	};

	const register = (evt) => {
		evt.preventDefault();
		setNewUser({ ...registerFormVals });
		setRegisterFormVals({ newUserUn: "", newUserPass: "" });
	};

	return (
		<>
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
