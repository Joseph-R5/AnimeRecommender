import {
  ADD_ANIME,
  AUTO_COMPLETE_SUGGESTION,
  CLEAR_AUTO_COMPLETE_SUGGESTION,
  UPDATE_QUERY,
  FIND_RECOMMENDATIONS,
  DELETE_ANIME,
  TOGGLE_FILTER_BUTTON,
  LOAD_SPINNER,
  CLEAR_RECOMMENDATIONS,
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

const initialState = {
  animeList: [],
  autoCompleteList: [],
  animeTitleList: [],
  query: "",
  errorResponse: "",
  showErrorMsg: false,
  isLoading: false,
  autoCompleteLoading: false,
  filterOptions: filteredListData,
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
    case AUTO_COMPLETE_SUGGESTION:
      return {
        ...state,
        autoCompleteList: action.json.results,
        autoCompleteLoading: false
      }
    case CLEAR_AUTO_COMPLETE_SUGGESTION:
      return {
        ...state,
        autoCompleteList: [],
        query: "",
        autoCompleteLoading: false
      }
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case FIND_RECOMMENDATIONS:
      return {
        ...state,
        recommendationList: action.filteredAnimeRecommendationList
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
    case TOGGLE_FILTER_BUTTON:
      const index = state.filterOptions.findIndex((obj => obj.title === action.option.title))
      let tempFilterOptions = state.filterOptions;
      tempFilterOptions[index].enabled = !tempFilterOptions[index].enabled

      return {
        ...state,
        filterOptions: [...state.filterOptions],
        isLoading: false
      }
    case LOAD_SPINNER:
      return {
        ...state,
        isLoading: action.bool
      }
    case CLEAR_RECOMMENDATIONS:
      return {
        ...state,
        recommendationList: []
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
  modalReducer
})

export default reducer;