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
		padding-top: 1.7%;
		padding-right: 5%;
	}

	a {
		font-size: 1.5rem;
		text-decoration: none;
	}
`;

const Header = ({ signedIn }) => {
	return (
		<StyledHeader>
			<img src={img} alt="secret family recipes logo"></img>
			<div>
				<NavLink to="/">Home</NavLink>
				{!signedIn ? null : <NavLink to="/">Dashboard</NavLink>}
			</div>
		</StyledHeader>
	);
};

export default Header;
