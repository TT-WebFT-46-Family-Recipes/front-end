import { 
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
    ADD_RECIPE,
    ADD_RECIPE_FAIL,
    DELETE_RECIPE,
    DELETE_RECIPE_FAIL,
    EDIT_RECIPE,
    EDIT_RECIPE_FAIL 
} from '../actions'

const InitialState = {
    users: {},
    recipes: {},
    isLoading: true,
    error: ''
}

export const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case FETCH_RECIPES_START:
            return {
                ...state,
                isLoading: true,
                recipes: [],
                error: ''
            }
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipes: action.payload,
                error: ''
            }
        case FETCH_RECIPES_ERROR:
            return {
                ...state,
                isLoading: false,
                recipes: [],
                error: action.payload
            }
        case ADD_RECIPE:
            return {
                ...state,
                isLoading: false,
                recipes: [
                    state.recipes,
                    action.payload
                ],
                error: ''
            }
        case ADD_RECIPE_FAIL:
            return {
                ...state,
                isLoading: false,
                recipes: [],
                error: action.payload
            }
        case DELETE_RECIPE:
            return {
                ...state,
                isLoading: false,
                recipes: [
                    state.recipes,
                    action.payload
                ],
                error: action.payload
            }
        case DELETE_RECIPE_FAIL:
            return {
                ...state,
                isLoading: false,
                recipes: [],
                error: action.payload
            }
        case EDIT_RECIPE:
            return {
                ...state,
                isLoading: false,
                recipes: [
                    state.recipes,
                    action.payload
                ],
                error: action.payload
            }
        case EDIT_RECIPE_FAIL:
            return {
                ...state,
                isLoading: false,
                recipes: [],
                error: action.payload
            }
        default:
            return state
    }
}