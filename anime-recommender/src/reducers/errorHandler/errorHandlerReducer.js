import {
    LOAD_ERROR_MSG,
    CLOSE_ERROR_MSG
} from "../../constants/action-types";

const initialState = {
    errorResponse: "",
    showErrorMsg: false,
}

export default function errorHandler(state = initialState, action) {
    switch (action.type) {
        case LOAD_ERROR_MSG:
            return {
                ...state,
                showErrorMsg: true,
                errorResponse: action.errorMessage,
            }
        case CLOSE_ERROR_MSG:
            return {
                ...state,
                showErrorMsg: false
            }
        default:
            return state;
    }
}