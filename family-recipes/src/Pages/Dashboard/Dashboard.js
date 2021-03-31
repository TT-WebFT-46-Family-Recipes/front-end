import React from "react";
import Header from "../Header";
import styled from "styled-components";
import { StyledFilters, StyledRecipeContainer } from "./styles";

const StyledDashboard = styled.section`
	height: 88vh;
	width: 100%;
	display: flex;
`;

const Dashboard = ({ signedIn, signOut }) => {
	return (
		<>
			<Header signedIn={signedIn} signOut={signOut} />
			<StyledDashboard>
				<StyledFilters>
					<div className="filters">
						<input name="search" placeholder="search:"></input>
					</div>
				</StyledFilters>
				<StyledRecipeContainer>
					<div className="bg-img"></div>
					<div className="recipe-modal"></div>
				</StyledRecipeContainer>
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
