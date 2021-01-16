import {
  ADD_ANIME,
  DELETE_ANIME,
  LOAD_SPINNER,
} from "../constants/action-types";

import filteredListData from "../data/filteredListData";
import { combineReducers } from 'redux';
import recommendations from "./recommendationsReducer";
import paginations from "./paginationReducer";
import genres from "./genreReducer";
import errorHandler from "./errorHandlerReducer";
import loader from "./loaderReducer";
import mobileReducer from "./mobileReducer";
import modalReducer from "./modalReducer";
import search from "./searchReducer";
import filters from "./filterReducer";

const initialState = {
  animeList: [],
  animeTitleList: [],
  isLoading: false,
};

function rootReducer(state = initialState, action) {
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
    case LOAD_SPINNER:
      return {
        ...state,
        isLoading: action.bool
      }
    default:
      break;
  }

  return state;
}

const reducer = combineReducers({
  rootReducer,
  recommendations,
  paginations,
  genres,
  errorHandler,
  mobileReducer,
  modalReducer,
  search,
  filters
})

export default reducer;