import {
    TOGGLE_MODAL,
    LOAD_MODAL_SPINNER
} from "../constants/action-types";

const initialState = {
    showModal: false,
    recommendedAnime: [],
    loadingModal: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: !action.toggle,
                recommendedAnime: action.json,
                loadingModal: false,
            }
        case LOAD_MODAL_SPINNER:
            return {
                ...state,
                loadingModal: action.bool
            }
        default:
            return state;
    }
}