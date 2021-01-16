import {
    AUTO_COMPLETE_SUGGESTION,
    CLEAR_AUTO_COMPLETE_SUGGESTION,
    UPDATE_QUERY
} from "../constants/action-types";

const initialState = {
    autoCompleteList: [],
    query: "",
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case UPDATE_QUERY:
            return {
              ...state,
              query: action.payload
            }
        case AUTO_COMPLETE_SUGGESTION:
            return {
                ...state,
                autoCompleteList: action.json.results,
                autoCompleteLoading: false
            }
        case CLEAR_AUTO_COMPLETE_SUGGESTION:
            return {
                ...state,
                autoCompleteList: [],
                query: "",
                autoCompleteLoading: false
            }
        default:
            return state;
    }
}