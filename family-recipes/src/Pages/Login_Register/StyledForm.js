import styled from "styled-components";

const StyledForm = styled.div`
	background-color: #ffffff;
	font-family: "Ubuntu", sans-serif;

	top: 17%;
	left: 57%;
	width: 30%;

	z-index: 15;
	position: relative;
	border-radius: 1.5em;
	box-shadow: 7px 7px 4px 2px rgba(0, 0, 0, 0.14);
	overflow: hidden;

	.title {
		padding-top: 10%;
		font-size: 2.5rem;
		color: #fb5c7b;
		margin-top: 0;
		margin-bottom: 12%;
		text-align: center;
		font-family: "Comfortaa", cursive;
		font-weight: bolder;
	}

	.inputs {
		display: block;
		margin: 0 auto 5%;
		width: 60%;
		color: rgb(38, 50, 56);
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 1px;
		background: rgba(136, 126, 126, 0.04);
		padding: 2% 2%;
		border: 2px solid rgba(0, 0, 0, 0.03);
		border-radius: 20px;
		font-family: "Ubuntu", sans-serif;
		text-align: center;
		outline: none;
	}

	.inputs:focus {
		border: 2px solid rgba(0, 0, 0, 0.18);
	}

	button {
		cursor: pointer;
		border-radius: 5em;
		color: #fff;
		background: linear-gradient(to right, #fb5c7b, #fe9856);
		border: 0;
		padding: 2% 10%;
		font-family: "Ubuntu", sans-serif;
		display: block;
		margin: 15% auto 5%;
		font-size: 1rem;
		box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
		outline: none;
	}

	span {
		width: 30%;
		display: block;
		margin: 0 auto;
		padding: 2% 0 5%;
		color: #fb5c7b;
		text-align: center;
		cursor: pointer;
	}

	.titleRegister {
		padding: 10% 5% 5%;
		font-size: 2.5rem;
		color: #ef3737;
		text-align: center;
		margin-top: 0;
		font-family: "Comfortaa", cursive;
		font-weight: bolder;
	}

	.inputsRegister {
		display: block;
		margin: 0 auto 5%;
		width: 60%;
		color: rgb(38, 50, 56);
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 1px;
		background: white;
		padding: 2% 2%;
		border: 2px solid rgba(0, 0, 0, 0.03);
		border-radius: 20px;
		font-family: "Ubuntu", sans-serif;
		text-align: center;
		outline: none;
	}

	.btnRegister {
		cursor: pointer;
		border-radius: 5em;
		color: #fff;
		background: linear-gradient(to right, #ef3737, #fb5c7b);
		border: 0;
		padding: 2% 10%;
		font-family: "Ubuntu", sans-serif;
		display: block;
		margin: 16% auto 20%;
		font-size: 1rem;
		box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
	}
	// <------------------------------------------------------------------------->

	.form-toggle {
		z-index: 10;
		position: absolute;
		top: 30px;
		right: 30px;
		background: #ffffff;
		border-radius: 100%;
		opacity: 0;
		cursor: ${(props) => (props.clicked ? "pointer" : "default")};
		transition: all 0.3s ease;
	}

	.form-toggle:before,
	.form-toggle:after {
		content: "";
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 30px;
		height: 4px;
		background: #ffffff;
		transform: translate(-50%, -50%);
	}

	.form-toggle:before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.form-toggle:after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.form-toggle.visible {
		transform: translate(0, -25%) scale(1);
		opacity: 1;
	}

	.form-panel.two {
		z-index: 5;
		position: absolute;
		top: 0;
		left: 95%;
		background: linear-gradient(to right, #fcb69f, #ffecd2);
		width: 100%;
		transition: 0.5s ease;
		cursor: pointer;
	}

	.form-panel.two:before,
	.form-panel.two:after {
		content: "";
		display: block;
		position: absolute;
		top: 80px;
		left: 1.5%;
		background: #ffffff;
		height: 30px;
		width: 2px;
	}

	.form-panel.two:after {
		left: 3%;
	}

	.form-panel.two:hover {
		left: 93%;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
	}

	.form-panel.two.active {
		left: 0;
		cursor: default;
	}
`;

export default StyledForm;
