import {
    LOAD_SPINNER
} from "../constants/action-types";

const initialState = {
    isLoading: false,
}

export default function loader(state = initialState, action) {
    switch (action.type) {
        case LOAD_SPINNER:
            return {
                ...state,
                isLoading: action.bool
            }
        default:
            return state;
    }
}