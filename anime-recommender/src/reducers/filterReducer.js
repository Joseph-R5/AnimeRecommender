import {
    TOGGLE_FILTER_BUTTON
} from "../constants/action-types";

import filteredListData from "../data/filteredListData";

const initialState = {
    filterOptions: filteredListData
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
                isLoading: false
            }
        default:
            return state;
    }
}