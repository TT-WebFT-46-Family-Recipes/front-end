import React, { useState, useEffect } from "react";
// import axios from 'axios'
import * as yup from "yup";
import RecipeForm from "./RecipeForm";
import schema from "./validation/formSchema";
// import { useHistory } from 'react-router'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { addNewRecipe } from '../../store/actions'
import { axiosWithAuth } from "../../helper/AxiosWithAuth";

const initialFormValues = {
	title: "",
	source: "",
	ingredients: "",
	instructions: "",
	category: "",
};

const initialFormErrors = {
	title: "",
	source: "",
	ingredients: "",
	instructions: "",
	category: "",
};

const initialDisabled = true;

export default function RecipeEntry() {
	const [formValues, setFormValues] = useState(initialFormValues); // object
	const [formErrors, setFormErrors] = useState(initialFormErrors); // object
	const [disabled, setDisabled] = useState(initialDisabled); // boolean

	const postNewRecipes = (newRecipes) => {
		axiosWithAuth()
			.post(
				"https://tt-webft-46-family-recipes.herokuapp.com/api/recipes",
				newRecipes
			)
			.then((res) => {})
			.catch((err) => {
				console.log({ err });
			});
	};

	const inputChange = (name, value) => {
		yup.reach(schema, name)

			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})

			.catch((err) => {
				setFormErrors({
					...formErrors,

					[name]: err.errors[0],
				});
			});
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const formSubmit = () => {
		const newRecipes = {
			title: formValues.title.trim(),
			source: formValues.source.trim(),
			ingredients: formValues.ingredients.trim(),
			instructions: formValues.instructions.trim(),

			category: ["dinner", "chicken", "dessert", "pasta", "other"].filter(
				(category) => formValues[category]
			),
		};

		postNewRecipes(newRecipes);
	};

	// useEffect(() => {
	//   getRecipes();
	// }, []);

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<div className="App">
			<RecipeForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>
		</div>
	);
}
