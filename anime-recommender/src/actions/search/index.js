import {
    AUTO_COMPLETE_SUGGESTION,
    CLEAR_AUTO_COMPLETE_SUGGESTION,
    UPDATE_QUERY
} from "../../constants/action-types";

export function autoCompleteSearchBar(payload) {
    return function (dispatch) {
        return fetch("https://api.jikan.moe/v3/search/anime?q=" + payload + "&limit=3")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: AUTO_COMPLETE_SUGGESTION, json })
            })
    }
}

export function clearAutoCompleteSuggestions(payload) {
    return { type: CLEAR_AUTO_COMPLETE_SUGGESTION, payload }
};

export function updateQuery(payload) {
    return { type: UPDATE_QUERY, payload }
};