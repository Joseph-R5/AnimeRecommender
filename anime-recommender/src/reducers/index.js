import {
  ADD_ANIME,
  AUTO_COMPLETE_SUGGESTION,
  CLEAR_AUTO_COMPLETE_SUGGESTION,
  UPDATE_QUERY,
  FIND_RECOMMENDATIONS,
  DELETE_ANIME,
  LOAD_ERROR_MSG,
  CLOSE_ERROR_MSG,
  TOGGLE_FILTER_BUTTON,
  UPDATE_GENRE_FILTER_LIST,
  NO_RECOMMENDATIONS_FOUND,
  TOGGLE_MODAL,
  LOAD_SPINNER,
  CLEAR_RECOMMENDATIONS,
  FIND_MOVIE_RECOMMENDATIONS,
  FIND_TV_RECOMMENDATIONS,
  FIND_ONA_RECOMMENDATIONS,
  FIND_OVA_RECOMMENDATIONS,
  CHANGE_TV_INDEX,
  CHANGE_ONA_INDEX,
  CHANGE_OVA_INDEX,
  CHANGE_MOVIE_INDEX,
  SET_MOBILE_OPEN
} from "../constants/action-types";

import filteredListData from "../data/filteredListData";

const initialState = {
  animeList: [],
  autoCompleteList: [],
  animeTitleList: [],
  filterGenreOptions: [],
  movieRecommendations: [],
  tvRecommendations: [],
  ovaRecommendations: [],
  onaRecommendations: [],
  query: "",
  errorResponse: "",
  showErrorMsg: false,
  showModal: false,
  isLoading: false,
  autoCompleteLoading: false,
  movieRecommendationIndex: 0,
  tvRecommendationIndex: 0,
  ovaRecommendationIndex: 0,
  onaRecommendationIndex: 0,
  filterOptions: filteredListData,
  mobileOpen: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANIME:
      return {
        ...state,
        query: "",
        animeList: state.animeList.concat(action.animeResults),
        animeTitleList: [...state.animeTitleList, action.animeResults.title],
        currentIndex: state.animeList.length,
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
    case LOAD_ERROR_MSG:
      return {
        ...state,
        showErrorMsg: true,
        errorResponse: action.payload,
        isLoading: false
      }
    case CLOSE_ERROR_MSG:
      return {
        ...state,
        showErrorMsg: false
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
    case UPDATE_GENRE_FILTER_LIST:
      return {
        ...state,
        filterGenreOptions: action.genreList,
        isLoading: false
      }
    case NO_RECOMMENDATIONS_FOUND:
      return {
        ...state,
        filterGenreOptions: [],
        showErrorMsg: true,
        errorResponse: action.payload
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !action.toggle,
        recommendedAnime: action.json,
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
    case FIND_MOVIE_RECOMMENDATIONS:
      return {
        ...state,
        movieRecommendations: action.movieResults
      }
    case FIND_TV_RECOMMENDATIONS:
      return {
        ...state,
        tvRecommendations: action.tvResults
      }
    case FIND_ONA_RECOMMENDATIONS:
      return {
        ...state,
        onaRecommendations: action.onaResults
      }
    case FIND_OVA_RECOMMENDATIONS:
      return {
        ...state,
        ovaRecommendations: action.ovaResults
      }
    case CHANGE_TV_INDEX:
      return {
        ...state,
        tvRecommendationIndex: action.newCurrentIndex
      }
    case CHANGE_MOVIE_INDEX:
      return {
        ...state,
        movieRecommendationIndex: action.newCurrentIndex
      }
    case CHANGE_ONA_INDEX:
      return {
        ...state,
        onaRecommendationIndex: action.newCurrentIndex
      }
    case CHANGE_OVA_INDEX:
      return {
        ...state,
        ovaRecommendationIndex: action.newCurrentIndex
      }
    case SET_MOBILE_OPEN:
      return {
        ...state,
        mobileOpen: action.payload
      }
    default:
      break;
  }

  return state;
}

export default rootReducer;
