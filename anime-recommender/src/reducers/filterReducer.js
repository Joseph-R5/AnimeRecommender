import {
    TOGGLE_FILTER_BUTTON,
    LOAD_FILTER_SPINNER
} from "../constants/action-types";

import filteredListData from "../data/filteredListData";

const initialState = {
    filterOptions: filteredListData,
    loadingFilter: false
}

export default function filters(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FILTER_BUTTON:
            const index = state.filterOptions.findIndex((obj => obj.title === action.option.title))
            let tempFilterOptions = state.filterOptions;
            tempFilterOptions[index].enabled = !tempFilterOptions[index].enabled
            return {
                ...state,
                filterOptions: [...state.filterOptions],
                loadingFilter: false
            }
        case LOAD_FILTER_SPINNER:
            return {
                ...state,
                loadingFilter: action.bool
            }
        default:
            return state;
    }
}