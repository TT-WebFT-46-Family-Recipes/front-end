import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/logo.png";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	border-bottom: solid 2px rgba(0, 0, 0, 0.1);

	img {
		width: 4%;
		padding: 1% 4%;
	}

	div {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	a {
		width: 20%;
		text-align: center;
		padding: 1% 0;
		font-size: 1.1rem;
		text-decoration: none;
		color: #ffffff;
		margin-right: 5%;
		border: 2px solid;
		border-radius: 25px;
		background-color: #fb5c7c;
		/* fb5c7c */
		/* fcb69f */
		font-weight: 500;
		font-family: "Ubuntu", sans-serif;
	}
`;

const Header = ({ signedIn, signOut }) => {
	return (
		<StyledHeader>
			<img src={img} alt="secret family recipes logo"></img>
			<div>
				<NavLink to="/">Home</NavLink>
				{!signedIn ? null : (
					<NavLink to="/" onClick={() => signOut(!signedIn)}>
						Log Out
					</NavLink>
				)}
			</div>
		</StyledHeader>
	);
};

export default Header;
