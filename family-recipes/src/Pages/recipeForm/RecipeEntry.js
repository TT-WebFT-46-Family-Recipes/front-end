import React, { useState, useEffect } from "react";
// import axios from 'axios'
import * as yup from "yup";
import RecipeForm from "./RecipeForm";
import schema from "./validation/formSchema";
import { useDispatch } from "react-redux";
import { addNewRecipe } from "../../store/actions";
import { useHistory } from "react-router-dom";

const initialFormValues = {
	title: "",
	source: "",
	ingredients: "",
	instructions: "",
	category_name: "",
};

const initialFormErrors = {
	title: "",
	source: "",
	ingredients: "",
	instructions: "",
	category_name: "",
};

const initialDisabled = true;

export default function RecipeEntry() {
	const [formValues, setFormValues] = useState(initialFormValues); // object
	const [formErrors, setFormErrors] = useState(initialFormErrors); // object
	const [disabled, setDisabled] = useState(initialDisabled); // boolean

	const dispatch = useDispatch();

	const history = useHistory();

	const postNewRecipes = (newRecipes) => {
		dispatch(addNewRecipe(newRecipes));
		history.push("/dashboard");
	};

	const inputChange = (name, value) => {
		yup
			.reach(schema, name)

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
			id: Date.now(),
			title: formValues.title.trim(),
			author: formValues.source.trim(),
			category_name: formValues.category_name.trim(),
		};

		postNewRecipes(newRecipes);
	};

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
