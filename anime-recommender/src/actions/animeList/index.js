import {
    DELETE_ANIME,
    ADD_ANIME,
} from "../../constants/action-types";

import { getExactAnimeFromAPI } from "../../util/utils";

import { NO_DATA_EXISTS_FOR_GIVEN_ANIME } from "../../constants/error-messages";
import { loadErrorMessage } from "../errorHandler";
import { loadAnimeListSpinner } from "../loader";

export function addAnime(payload) {
    return function (dispatch) {
        return fetch("https://api.jikan.moe/v3/search/anime?q=" + payload)
            .then(response => response.json())
            .then(json => {
                const animeResults = getExactAnimeFromAPI(payload, json.results)

                if (animeResults) {
                    dispatch({ type: ADD_ANIME, animeResults })
                } else {
                    const errorMessage = NO_DATA_EXISTS_FOR_GIVEN_ANIME;
                    const bool = false;

                    loadAnimeListSpinner(dispatch, bool)
                    loadErrorMessage(dispatch, errorMessage)
                }
            })
    }
}

export function deleteAnimeFromList(payload) {
    return { type: DELETE_ANIME, payload }
}