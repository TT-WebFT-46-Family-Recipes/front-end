import React, { useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import { StyledFilters, StyledRecipeContainer } from "./styles";
import { useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";
import { useHistory } from "react-router";

const StyledDashboard = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
`;
const loader = css`
	z-index: 2;
	position: absolute;
	left: 43%;
	top: 30%;
`;

const Dashboard = ({ signedIn, signIn }) => {
	const { isLoading } = useSelector((state) => state);

	const [clicked, setClicked] = useState(false);

	const { push } = useHistory();

	const click = () => {
		setClicked((clicked) => !clicked);
	};

	return (
		<>
			<Header signedIn={signedIn} signIn={signIn} />
			<StyledDashboard>
				<StyledFilters>
					<div className="filters">
						<button
							onClick={() => push("/newrecipe")}
							className="new-recipe-btn"
						>
							Add Recipe
						</button>
						<input name="search" placeholder="search:"></input>
					</div>
				</StyledFilters>
				{isLoading ? (
					<DotLoader
						color={"#fb5c7c"}
						loading={true}
						css={loader}
						size={150}
					/>
				) : (
					<StyledRecipeContainer>
						<div className="bg-img">
							{/* <DotLoader
								color={"#fb5c7c"}
								loading={true}
								css={loader}
								size={150}
							/> */}
							<div className="recipe">
								<h3
									align="center"
									style={{
										borderBottom:
											"solid 2px rgba(0, 0, 0, 0.1)",
										padding: "5% 0",
										margin: 0,
										color: "#EE617B",
										// #EE617B
										fontWeight: 1000,
										fontSize: "2rem",
									}}
								>
									Egg Salad Sandwich
								</h3>
								<p
									style={{
										textAlign: "center",
										color: "#EE617B",
									}}
								>
									test test test test test
								</p>
								<p
									style={{
										textAlign: "center",
										color: "#EE617B",
									}}
								>
									test test test test test
								</p>
								<p
									style={{
										textAlign: "center",
										color: "#EE617B",
									}}
								>
									test test test test test
								</p>
							</div>
							<div className="recipe">
								<h3
									align="center"
									style={{
										borderBottom:
											"solid 2px rgba(0, 0, 0, 0.1)",
										padding: "5% 0",
										margin: 0,
										color: "#fb5c7c",
										fontWeight: 900,
										fontSize: "2rem",
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
										color: "#fb5c7c",
										fontWeight: 800,
										fontSize: "2rem",
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
										color: "#fb5c7c",
										fontWeight: 700,
										fontSize: "2rem",
									}}
								>
									Title
								</h3>
							</div>
							{/*<div className="recipe">
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
							</div> */}
						</div>
						<div
							className={
								clicked ? "recipe-modal" : "recipe-modal hidden"
							}
						></div>
					</StyledRecipeContainer>
				)}
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
