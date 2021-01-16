import {
    SET_MOBILE_OPEN
} from "../constants/action-types";

const initialState = {
    mobileOpen: false,
}

export default function mobileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MOBILE_OPEN:
            return {
                ...state,
                mobileOpen: action.payload
            } 
        default:
            return state;
    }
}