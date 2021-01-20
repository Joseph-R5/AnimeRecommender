import {
    DELETE_ANIME,
    ADD_ANIME,
    LOAD_ANIME_LIST_SPINNER,
    LOAD_ERROR_MSG
} from "../../constants/action-types";

import { getExactAnimeFromAPI } from "../../util/utils";

import { NO_DATA_EXISTS_FOR_GIVEN_ANIME } from "../../constants/error-messages";

export function addAnime(payload) {
    return function (dispatch) {
        return fetch("https://api.jikan.moe/v3/search/anime?q=" + payload)
            .then(response => response.json())
            .then(json => {
                const animeResults = getExactAnimeFromAPI(payload, json.results)
                const errorMessage = NO_DATA_EXISTS_FOR_GIVEN_ANIME;
                const bool = false;

                if (animeResults) {
                    dispatch({ type: ADD_ANIME, animeResults })
                } else {
                    dispatch({ type: LOAD_ANIME_LIST_SPINNER, bool })
                    dispatch({ type: LOAD_ERROR_MSG, errorMessage })
                }
            })
    }
}

export function deleteAnimeFromList(payload) {
    return { type: DELETE_ANIME, payload }
}