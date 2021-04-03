import styled from "styled-components";
import img from "../../Assets/recipesbg.jpg";

const StyledFilters = styled.div`
	height: 100%;
	position: fixed;
	width: 20%;
	background-color: #eef3f6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.filters {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 85%;
		width: 90%;
		margin-bottom: 29%;
		background: white;
		border-radius: 20px;
		overflow: scroll;
		opacity: 0.95;
		border: solid 2px rgba(0, 0, 0, 0.2);
	}

	.filters::-webkit-scrollbar {
		display: none;
	}

	.new-recipe-btn {
		margin: 12% 0;
		color: rgb(38, 50, 56);
		font-size: 1rem;
		font-weight: bold;
		letter-spacing: 1px;
		background: rgba(136, 126, 126, 0.04);
		padding: 2% 10%;
		border: solid 2px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		font-family: "Ubuntu", sans-serif;
		outline: none;
		cursor: pointer;
	}

	.searchBox {
		width: 75%;
		margin: 0 0 5%;
		color: rgb(38, 50, 56);
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 1px;
		background: rgba(136, 126, 126, 0.04);
		padding: 2% 6%;
		border: solid 2px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		font-family: "Ubuntu", sans-serif;
		outline: none;
	}

	.searchBox:focus {
		border: 2px solid rgba(0, 0, 0, 0.18);
	}

	.searchBox::placeholder {
		text-align: center;
	}

	.filtersContainer {
		margin: 6% 0 9%;
		padding: 5% 0;
		height: 57vh;
		width: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: scroll;
		scroll-behavior: smooth;
	}

	.filtersContainer::-webkit-scrollbar {
		display: none;
	}

	.filterCheckbox {
		width: 8.5rem;
		letter-spacing: 1px;
		font-family: "Ubuntu", sans-serif;
		font-size: 1rem;
		margin: 0 auto 8%;
		display: flex;
		justify-content: flex-end;
	}

	label {
		width: 100%;
		text-align: center;
	}

	.checkbox {
		margin-left: 8%;
	}
`;

const StyledRecipeContainer = styled.div`
	width: 80%;
	height: 100%;
	position: fixed;
	left: 20%;
	border-left: solid 2px rgba(0, 0, 0, 0.1);

	.bg-img {
		height: 89vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		overflow: scroll;
		scroll-behavior: smooth;
		background-attachment: fixed;
	}

	.bg-img::-webkit-scrollbar {
		display: none;
	}

	.bg-img::before {
		content: "";
		background-image: url(${img});
		background-size: cover;
		opacity: 0.8;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}

	.recipe-modal {
		z-index: 1;
		width: 40%;
		height: 60%;
		background-color: #ffffff;
		position: absolute;
		top: 14%;
		right: 0;
		bottom: 0;
		left: 30%;
		border: solid 2px rgba(0, 0, 0, 0.1);
		border-radius: 15%;
		overflow: scroll;
	}

	.hidden {
		display: none;
	}

	.recipe-modal::-webkit-scrollbar {
		display: none;
	}
	.recipe {
		width: 25%;
		z-index: 1;
		margin: 2.9% 3.9% 2.9%;
		height: 40%;
		border-radius: 12%;
		background-color: white;
		opacity: 0.96;
		border: solid 2px rgba(0, 0, 0, 0.2);
	}
`;

export { StyledFilters, StyledRecipeContainer };
