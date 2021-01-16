import {
    TOGGLE_MODAL
} from "../constants/action-types";

const initialState = {
    showModal: false,
    recommendedAnime: []
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: !action.toggle,
                recommendedAnime: action.json,
                // isLoading: false
            }
        default:
            return state;
    }
}