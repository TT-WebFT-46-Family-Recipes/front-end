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
	const [filters, setFilters] = useState([]);
	const [checkedFilters, setCheckedFilters] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState(glRecipes);
	const [searchValue, setSearchValue] = useState({ searchVal: "" });
	const [titles, setTitles] = useState([]);
	const [searching, setSearching] = useState(false);

	const { push } = useHistory();

	const dispatch = useDispatch();

	/* keeps track of what is being searched for and hides recipe cards if searching */
	const search = (evt) => {
		setSearchValue({
			searchVal: evt.target.value,
		});
	};

	useEffect(() => {
		if (!isLoading) {
			if (searchValue.searchVal === "") setSearching(false);
			else if (searchValue.searchVal !== "") setSearching(true);
		}
	}, [isLoading, searchValue]);

	useEffect(() => {
		dispatch(fetchRecipeData());
	}, [dispatch]);

	/* creates the list of filters */
	useEffect(() => {
		if (!isLoading)
			glRecipes.forEach((recipe) => {
				if (!filters.includes(recipe.category_name))
					setFilters([...filters, recipe.category_name]);
			});
	}, [glRecipes, filters, isLoading]);

	/* keeps track of checked filters */
	const applyFilter = (evt) => {
		if (!isLoading)
			if (evt.target.checked)
				setCheckedFilters([...checkedFilters, evt.target.name]);
			else
				setCheckedFilters(
					checkedFilters.filter(
						(filter) => filter !== evt.target.name
					)
				);
	};

	/* applies checked filters */
	useEffect(() => {
		if (!isLoading) {
			setFilteredRecipes(
				glRecipes.filter((recipe) =>
					checkedFilters.includes(recipe.category_name)
				)
			);
		}
	}, [isLoading, glRecipes, checkedFilters]);

	/* filters through titles based on search input */
	useEffect(() => {
		if (!isLoading) {
			const recipeTitles = glRecipes.map((recipe) => {
				return recipe.title;
			});
			setTitles(
				recipeTitles.filter((title) =>
					title
						.toLowerCase()
						.includes(searchValue.searchVal.toLowerCase().trim())
				)
			);
		}
	}, [isLoading, glRecipes, searchValue]);

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
						<input
							className="searchBox"
							name="search"
							value={searchValue.searchVal}
							placeholder="Search for Title:"
							onChange={search}
							onFocus={(evt) => {
								evt.target.placeholder = "";
							}}
							onBlur={(evt) => {
								evt.target.placeholder = "Search for Title:";
							}}
						></input>
						<div
							className="filtersContainer"
							style={searching ? { display: "none" } : null}
						>
							{isLoading
								? null
								: filters.map((filter, idx) => {
										return (
											<div
												className="filterCheckbox"
												key={idx}
											>
												<label>{filter}</label>
												<input
													className="checkbox"
													type="checkbox"
													name={filter}
													onChange={applyFilter}
												/>
											</div>
										);
								  })}
						</div>
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
							{checkedFilters.length !== 0
								? filteredRecipes.map((recipe, idx) => {
										return (
											<div
												key={idx}
												style={{
													boxShadow:
														"0 0 40px -10px #000",
												}}
												className={
													selectedRecipe.title ||
													searching
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
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													{recipe.title}
												</h3>
												<h4
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Category:{" "}
													{recipe.category_name}
												</h4>
												<h5
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Source: {recipe.author}
												</h5>
											</div>
										);
								  })
								: glRecipes.map((recipe, idx) => {
										return (
											<div
												key={idx}
												style={{
													boxShadow:
														"0 0 40px -10px #000",
												}}
												className={
													selectedRecipe.title ||
													searching
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
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													{recipe.title}
												</h3>
												<h4
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Category:{" "}
													{recipe.category_name}
												</h4>
												<h5
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Source: {recipe.author}
												</h5>
											</div>
										);
								  })}
							{searching
								? titles.map((title, idx) => {
										return (
											<div
												key={idx}
												style={{
													boxShadow:
														"0 0 40px -10px #000",
												}}
												className={
													selectedRecipe.title
														? "recipe hidden"
														: "recipe"
												}
												onClick={() =>
													setSelectedRecipe(
														glRecipes.find(
															(recipe) =>
																recipe.title ===
																title
														)
													)
												}
											>
												<h3
													align="center"
													style={{
														padding: "0 5%",
														marginBottom: "15%",
														color: "#fb5c7c",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													{
														glRecipes.find(
															(recipe) =>
																recipe.title ===
																title
														).title
													}
												</h3>
												<h4
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Category:{" "}
													{
														glRecipes.find(
															(recipe) =>
																recipe.title ===
																title
														).category_name
													}
												</h4>
												<h5
													align="center"
													style={{
														color:
															"rgba(0, 0, 0, .7)",
														fontFamily:
															'Ubuntu", sans-serif',
													}}
												>
													Source:{" "}
													{
														glRecipes.find(
															(recipe) =>
																recipe.title ===
																title
														).author
													}
												</h5>
											</div>
										);
								  })
								: null}
						</div>
						<div
							style={{
								boxShadow: "0 0 40px -10px #000",
							}}
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
									fontFamily: 'Ubuntu", sans-serif',
								}}
							>
								{selectedRecipe.title}
							</h2>
							<h3
								align="center"
								style={{
									color: "rgba(0, 0, 0, .7)",
								}}
							>
								Category: {selectedRecipe.category_name}
							</h3>
							<h4
								align="center"
								style={{
									color: "rgba(0, 0, 0, .7)",
								}}
							>
								Source: {selectedRecipe.author}
							</h4>
						</div>
					</StyledRecipeContainer>
				)}
			</StyledDashboard>
		</>
	);
};

export default Dashboard;
