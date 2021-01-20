import { TOGGLE_MODAL } from "../../constants/action-types";

export function toggleModal(toggle, anime) {
    if (anime) {
        return function (dispatch) {
            return fetch("https://api.jikan.moe/v3/search/anime?q=" + anime.title + "&limit=1")
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: TOGGLE_MODAL, toggle, json })
                })
        }
    } else {
        return { type: TOGGLE_MODAL, toggle };
    }
}