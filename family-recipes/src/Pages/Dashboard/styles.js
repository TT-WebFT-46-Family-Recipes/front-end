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
		margin: 0 0 35%;
		background: white;
		border-radius: 20px;
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
	position: fixed;
	left: 20%;
	border-left: solid 2px rgba(0, 0, 0, 0.1);

	.bg-img {
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
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
`;

export { StyledFilters, StyledRecipeContainer };
