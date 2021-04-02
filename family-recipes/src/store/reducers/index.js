import {
	FETCH_RECIPES_START,
	FETCH_RECIPES_SUCCESS,
	FETCH_RECIPES_ERROR,
	ADD_RECIPE,
	ADD_RECIPE_FAIL,
	DELETE_RECIPE,
	DELETE_RECIPE_FAIL,
	EDIT_RECIPE,
	EDIT_RECIPE_FAIL,
	FETCH_INGREDIENTS,
	FETCH_INSTRUCTIONS,
} from "../actions";

const InitialState = {
	glRecipes: [],
	isLoading: false,
	error: "",
	ingredients: [],
	instructions: [],
};

export const reducer = (state = InitialState, action) => {
	switch (action.type) {
		case FETCH_RECIPES_START:
			return {
				...state,
				isLoading: true,
				glRecipes: {},
				error: "",
			};
		case FETCH_RECIPES_SUCCESS:
			return {
				...state,
				isLoading: false,
				glRecipes: action.payload,
				error: "",
			};
		case FETCH_RECIPES_ERROR:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		case FETCH_INGREDIENTS:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		case FETCH_INSTRUCTIONS:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		case ADD_RECIPE:
			return {
				...state,
				isLoading: false,
				glRecipes: [state.glRecipes, action.payload],
				error: "",
			};
		case ADD_RECIPE_FAIL:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		case DELETE_RECIPE:
			return {
				...state,
				isLoading: false,
				glRecipes: [state.glRecipes, action.payload],
				error: action.payload,
			};
		case DELETE_RECIPE_FAIL:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		case EDIT_RECIPE:
			return {
				...state,
				isLoading: false,
				glRecipes: [state.glRecipes, action.payload],
				error: action.payload,
			};
		case EDIT_RECIPE_FAIL:
			return {
				...state,
				isLoading: false,
				glRecipes: {},
				error: action.payload,
			};
		default:
			return state;
	}
};
