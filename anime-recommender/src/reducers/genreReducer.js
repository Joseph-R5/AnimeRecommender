import {
    UPDATE_GENRE_FILTER_LIST,
    NO_RECOMMENDATIONS_FOUND
} from "../constants/action-types";

const initialState = {
    filterGenreOptions: []
}

export default function genres(state = initialState, action) {
    switch (action.type) {
        case UPDATE_GENRE_FILTER_LIST:
            return {
                ...state,
                filterGenreOptions: action.genreList
            }
        case NO_RECOMMENDATIONS_FOUND:
            return {
                ...state,
                filterGenreOptions: [],
                showErrorMsg: true,
                errorResponse: action.payload
            }
        default:
            return state;
    }
}