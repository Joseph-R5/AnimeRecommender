import {
  ADD_ANIME,
  AUTO_COMPLETE_SUGGESTION,
  CLEAR_AUTO_COMPLETE_SUGGESTION,
  UPDATE_QUERY,
  CHANGE_CURRENT_INDEX,
  DELETE_ANIME,
  CLOSE_ERROR_MSG,
  TOGGLE_FILTER_BUTTON,
  UPDATE_GENRE_FILTER_LIST,
  TOGGLE_MODAL,
  LOAD_SPINNER,
  CLEAR_RECOMMENDATIONS,
  FIND_MOVIE_RECOMMENDATIONS,
  FIND_TV_RECOMMENDATIONS,
  FIND_OVA_RECOMMENDATIONS,
  FIND_ONA_RECOMMENDATIONS,
  SET_MOBILE_OPEN
} from "../constants/action-types";

import {
  filterDuplicateRecommendedAnime,
  increaseRecommendedIndexHelper,
  decreaseRecommendedIndexHelper,
  constructRecommendationURL,
  getSectionIndexOption,
  getExactAnimeFromAPI
} from "../util/utils";

export function updateQuery(payload) {
  return { type: UPDATE_QUERY, payload }
};

export function addAnime(payload) {
  return function (dispatch) {
    return fetch("https://api.jikan.moe/v3/search/anime?q=" + payload)
      .then(response => response.json())
      .then(json => {
        const animeResults = getExactAnimeFromAPI(payload, json.results)
        dispatch({ type: ADD_ANIME, animeResults })
      })
  }
}

export function loadSpinner(bool) {
  return { type: LOAD_SPINNER, bool }
}


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

export function changeCurrentIndex(payload) {
  return { type: CHANGE_CURRENT_INDEX, payload }
}

export function getRecommendationlist(animeTitleList, filterOptions, filterGenreOptions) {

  return function (dispatch) {
    fetch(
      constructRecommendationURL(animeTitleList, "movie", filterOptions, filterGenreOptions))
      .then(response => response.json())
      .then(json => {
        const filteredAnimeRecommendationList = filterDuplicateRecommendedAnime(animeTitleList, json.results);
        dispatch({ type: FIND_MOVIE_RECOMMENDATIONS, filteredAnimeRecommendationList, animeTitleList })
      })
      .then(() =>
        fetch(
          constructRecommendationURL(animeTitleList, "tv", filterOptions, filterGenreOptions)))
      .then(response => response.json())
      .then(json => {
        const filteredAnimeRecommendationList = filterDuplicateRecommendedAnime(animeTitleList, json.results);
        dispatch({ type: FIND_TV_RECOMMENDATIONS, filteredAnimeRecommendationList, animeTitleList })
      })
      .then(() =>
        fetch(constructRecommendationURL(animeTitleList, "ova", filterOptions, filterGenreOptions)))
      .then(response => response.json())
      .then(json => {
        const filteredAnimeRecommendationList = filterDuplicateRecommendedAnime(animeTitleList, json.results);
        dispatch({ type: FIND_OVA_RECOMMENDATIONS, filteredAnimeRecommendationList, animeTitleList })
      })
      .then(() =>
        fetch(constructRecommendationURL(animeTitleList, "ona", filterOptions, filterGenreOptions)))
      .then(response => response.json())
      .then(json => {
        const filteredAnimeRecommendationList = filterDuplicateRecommendedAnime(animeTitleList, json.results);
        dispatch({ type: FIND_ONA_RECOMMENDATIONS, filteredAnimeRecommendationList, animeTitleList })
      })
  }
}

export function deleteAnimeFromList(payload) {
  return { type: DELETE_ANIME, payload }
}

export function closeErrorMessage() {
  return { type: CLOSE_ERROR_MSG }
}

export function increaseRecommendedIndex(index, recommendedListLength, section) {
  const newCurrentIndex = increaseRecommendedIndexHelper(index, recommendedListLength)
  const getSectionType = getSectionIndexOption(section);
  return { type: getSectionType, newCurrentIndex }
}

export function decreaseRecommendedIndex(index, section) {
  const newCurrentIndex = decreaseRecommendedIndexHelper(index)
  const getSectionType = getSectionIndexOption(section)
  return { type: getSectionType, newCurrentIndex }
}

export function toggleFilterButton(option) {
  return { type: TOGGLE_FILTER_BUTTON, option }
}

export function updateGenreList(genreList) {
  return { type: UPDATE_GENRE_FILTER_LIST, genreList }
}

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

export function clearRecommendations() {
  return { type: CLEAR_RECOMMENDATIONS }
}

export function setMobileOpen(payload) {
  return { type: SET_MOBILE_OPEN, payload }
}