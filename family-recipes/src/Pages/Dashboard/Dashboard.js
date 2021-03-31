import React, { useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import { StyledFilters, StyledRecipeContainer } from "./styles";
import { useSelector } from 'react-redux'

const StyledDashboard = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
`;


const Dashboard = ({ signedIn, signOut }) => {
	const { isLoading } = useSelector(state => state)

	const [clicked, setClicked] = useState(false);

	const click = () => {
		setClicked((clicked) => !clicked);
	};

	return (
		<>
			<Header signedIn={signedIn} signOut={signOut} />
			<StyledDashboard>
				<StyledFilters>
					<div className="filters">
						<button className="new-recipe-btn">Add Recipe</button>
						<input name="search" placeholder="search:"></input>
					</div>
				</StyledFilters>
				{isLoading ? <h1>Here</h1> : <StyledRecipeContainer>
					<div className="bg-img">
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
						<div className="recipe">
							<h3
								align="center"
								style={{
									borderBottom:
										"solid 2px rgba(0, 0, 0, 0.1)",
									padding: "5% 0",
									margin: 0,
								}}
							>
								Title
							</h3>
						</div>
					</div>
					<div
						className={
							clicked ? "recipe-modal" : "recipe-modal hidden"
						}
					></div>
				</StyledRecipeContainer>}
				
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
