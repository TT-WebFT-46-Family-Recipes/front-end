import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/logo.png";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	border-bottom: solid 2px rgba(0, 0, 0, 0.1);
	background-color: white;
	opacity: 0.95;

	.logo {
		margin: 2px 3% 0;
		width: 4.5%;
		padding: 0.5% 0;
	}

	.logo-img {
		width: 100%;
	}

	div {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.a {
		width: 17%;
		text-align: center;
		padding: 1% 0;
		font-size: 1.1rem;
		text-decoration: none;
		color: #ffffff;
		margin-right: 5%;
		border: 2px solid;
		border-radius: 25px;
		background-color: #fb5c7c;
		font-weight: 500;
		font-family: "Ubuntu", sans-serif;
	}
`;

const Header = ({ signedIn, signIn }) => {
	const manageSignIn = () => {
		signIn((signedIn) => !signedIn);
		localStorage.removeItem("token");
	};
	return (
		<StyledHeader>
			<Link className="logo" to="/">
				<img
					className="logo-img"
					src={img}
					alt="secret family recipes logo"
				></img>
			</Link>
			<div>
				<NavLink className="a" to="https://front-end2-bice.vercel.app/">
					Home
				</NavLink>

				{signedIn ? (
					<NavLink className="a" to="/login" onClick={manageSignIn}>
						Log Out
					</NavLink>
				) : null}
			</div>
		</StyledHeader>
	);
};

export default Header;
