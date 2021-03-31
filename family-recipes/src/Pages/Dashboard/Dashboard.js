import React, { useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import { StyledFilters, StyledRecipeContainer } from "./styles";
import img from "../../Assets/logo.png";

const StyledDashboard = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
`;

const Dashboard = ({ signedIn, signOut }) => {
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
						<input name="search" placeholder="search:"></input>
					</div>
				</StyledFilters>
				<StyledRecipeContainer>
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
				</StyledRecipeContainer>
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
