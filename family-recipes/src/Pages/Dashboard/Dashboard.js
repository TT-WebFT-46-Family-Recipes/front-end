import React, { useState, useEffect } from "react";
import Header from "../Header";
import styled from "styled-components";
import { StyledFilters, StyledRecipeContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";
import { useHistory } from "react-router";
import { fetchRecipeData } from "../../store/actions";

const StyledDashboard = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
`;
const loader = css`
	z-index: 2;
	position: absolute;
	left: 55%;
	top: 30%;
`;

const Dashboard = ({ signedIn, signIn }) => {
	const { isLoading, glRecipes } = useSelector((state) => state);
	const [selectedRecipe, setSelectedRecipe] = useState({});

	const { push } = useHistory();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRecipeData());
	}, [dispatch]);

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
							{glRecipes.map((recipe, idx) => {
								return (
									<div
										key={idx}
										className={
											selectedRecipe.title
												? "recipe hidden"
												: "recipe"
										}
										onClick={() =>
											setSelectedRecipe(recipe)
										}
									>
										<h3
											align="center"
											style={{
												padding: "0 5%",
												marginBottom: "15%",
												color: "#fb5c7c",
											}}
										>
											{recipe.title}
										</h3>
										<h4
											align="center"
											style={{
												color: "rgba(0, 0, 0, .7)",
											}}
										>
											Category: {recipe.category_name}
										</h4>
										<h5
											align="center"
											style={{
												color: "rgba(0, 0, 0, .7)",
											}}
										>
											Source: {recipe.author}
										</h5>
									</div>
								);
							})}
						</div>
						<div
							className={
								selectedRecipe.title
									? "recipe-modal"
									: "recipe-modal hidden"
							}
							onClick={() => setSelectedRecipe({})}
						>
							<h2
								align="center"
								style={{
									padding: "0 5%",
									margin: "10% 0",
									color: "#fb5c7c",
								}}
							>
								{selectedRecipe.title}
							</h2>
							<h4
								align="center"
								style={{
									color: "rgba(0, 0, 0, .7)",
								}}
							>
								Category: {selectedRecipe.category_name}
							</h4>
							<h5
								align="center"
								style={{
									color: "rgba(0, 0, 0, .7)",
								}}
							>
								Source: {selectedRecipe.author}
							</h5>
						</div>
					</StyledRecipeContainer>
				)}
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
