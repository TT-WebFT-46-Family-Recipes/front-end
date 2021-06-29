import { axiosWithAuth } from "../../helper/AxiosWithAuth";
import mockData from "../../mockdata";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const DELETE_RECIPE_FAIL = "DELETE_RECIPE_FAIL";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const EDIT_RECIPE_FAIL = "EDIT_RECIPE_FAIL";
export const FETCH_INSTRUCTIONS = "FETCH_INSTRUCTIONS";
export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";

export const fetchRecipeData = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_RECIPES_START });
		dispatch({ type: FETCH_RECIPES_SUCCESS, payload: mockData });
		// axiosWithAuth()
		//   .get('recipes')
		//   .then((res) => {
		//     dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data })
		//   })
		//   .catch((err) => {
		//     dispatch({ type: FETCH_RECIPES_ERROR, payload: err.message })
		//   })
	};
};

export const addNewRecipe = (recipe) => {
	return (dispatch) => {
		dispatch({ type: ADD_RECIPE, payload: recipe });
		// axiosWithAuth()
		//   .post('recipes', recipe)
		//   .then((res) => {
		//     dispatch({ type: ADD_RECIPE, payload: recipe })
		//     history.push('/dashboard')
		//   })
		//   .catch((err) => {
		//     dispatch({ type: ADD_RECIPE_FAIL, payload: err.message })
		//   })
	};
};

export const deleteRecipe = (id) => {
	return (dispatch) => {
		dispatch({ type: DELETE_RECIPE, payload: id });
		// axiosWithAuth()
		//   .delete(`recipes/${id}`)
		//   .then((res) => {
		//     dispatch({ type: DELETE_RECIPE, payload: res.data })
		//   })
		//   .catch((err) => {
		//     dispatch({ type: DELETE_RECIPE_FAIL, payload: err.message })
		//   })
	};
};

export const editRecipe = (id) => {
	return (dispatch) => {
		// axios
		//   .put(id)
		//   .then((res) => {
		//     dispatch({ type: EDIT_RECIPE, payload: res.data })
		//   })
		//   .catch((err) => {
		//     dispatch({ type: EDIT_RECIPE_FAIL, payload: err.message })
		//   })
	};
};
