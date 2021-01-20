import {
    ADD_ANIME,
    DELETE_ANIME,
    LOAD_ANIME_LIST_SPINNER
} from "../../constants/action-types";

const initialState = {
    animeList: [],
    animeTitleList: [],
    loadingAnimeList: false
};

export default function animeListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ANIME:
            return {
                ...state,
                query: "",
                animeList: state.animeList.concat(action.animeResults),
                animeTitleList: [...state.animeTitleList, action.animeResults.title],
                loadingAnimeList: false
            }
        case DELETE_ANIME:
            return {
                ...state,
                animeList: [
                    ...state.animeList.slice(0, action.payload),
                    ...state.animeList.slice(action.payload + 1)
                ],
                animeTitleList: [
                    ...state.animeTitleList.slice(0, action.payload),
                    ...state.animeTitleList.slice(action.payload + 1)
                ]
            }
        case LOAD_ANIME_LIST_SPINNER:
            return {
                ...state,
                loadingAnimeList: action.bool
            }
        default:
            return state;
    }
}