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
		height: 80%;
		width: 90%;
		margin: 3% 0 35%;
		background: white;
		border-radius: 20px;
		overflow: scroll;
	}

	.filters::-webkit-scrollbar {
		display: none;
	}

	input {
		width: 75%;
		margin: 20% 0;
		color: rgb(38, 50, 56);
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 1px;
		background: rgba(136, 126, 126, 0.04);
		padding: 2% 6%;
		border: 2px solid rgba(0, 0, 0, 0.03);
		border-radius: 10px;
		font-family: "Ubuntu", sans-serif;
		outline: none;
	}

	input:focus {
		border: 2px solid rgba(0, 0, 0, 0.18);
	}

	input::placeholder {
		text-align: center;
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
		opacity: 0.75;
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
		border-radius: 10%;
		overflow: scroll;
	}

	.hidden {
		display: none;
	}

	.recipe-modal::-webkit-scrollbar {
		display: none;
	}

	.recipe {
		z-index: 1;
		width: 25%;
		height: 40%;
		margin: 3% 3.9%;
		background-color: white;
		border-radius: 10%;
		border: solid 2px rgba(0, 0, 0, 0.1);
		opacity: 0.95;
	}
`;

export { StyledFilters, StyledRecipeContainer };
