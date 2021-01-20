import { LOAD_ANIME_LIST_SPINNER } from "../../constants/action-types"

export function loadSpinner(reducerType, bool) {
    return { type: reducerType, bool }
}

export function loadAnimeListSpinner(dispatch, bool) {
    dispatch({type: LOAD_ANIME_LIST_SPINNER, bool})
}