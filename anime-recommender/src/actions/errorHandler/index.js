import {
    CLOSE_ERROR_MSG,
    LOAD_ERROR_MSG
} from "../../constants/action-types";

export function closeErrorMessage() {
    return { type: CLOSE_ERROR_MSG }
}

export function loadErrorMessage(dispatch, errorMessage) {
    dispatch({ type: LOAD_ERROR_MSG, errorMessage })
}