import {
    UPDATE_GENRE_FILTER_LIST,
    NO_RECOMMENDATIONS_FOUND,
    LOAD_GENRE_SPINNER
} from "../constants/action-types";

const initialState = {
    filterGenreOptions: [],
    loadingGenre: false
}

export default function genres(state = initialState, action) {
    switch (action.type) {
        case UPDATE_GENRE_FILTER_LIST:
            return {
                ...state,
                filterGenreOptions: action.genreList,
                loadingGenre: false
            }
        case NO_RECOMMENDATIONS_FOUND:
            return {
                ...state,
                filterGenreOptions: [],
                // showErrorMsg: true,
                // errorResponse: action.payload
            }
        case LOAD_GENRE_SPINNER:
            return {
                ...state,
                loadingGenre: action.bool
            }
        default:
            return state;
    }
}