import {
    ADD_ANIME,
    DELETE_ANIME,
} from "../constants/action-types";

const initialState = {
    animeList: [],
    animeTitleList: [],
    isLoading: false
};

export default function animeListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ANIME:
            return {
                ...state,
                query: "",
                animeList: state.animeList.concat(action.animeResults),
                animeTitleList: [...state.animeTitleList, action.animeResults.title],
                isLoading: false
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
        default:
            return state;
    }
}