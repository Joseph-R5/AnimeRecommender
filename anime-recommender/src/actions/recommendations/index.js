import { 
    CLEAR_RECOMMENDATIONS,
    LOAD_ERROR_MSG,
    FIND_MOVIE_RECOMMENDATIONS,
    FIND_TV_RECOMMENDATIONS,
    FIND_ONA_RECOMMENDATIONS
} from "../../constants/action-types"

import {
    constructRecommendationURL,
    filterDuplicateRecommendedAnime
} from "../../util/utils";

import { FAILED_TO_FETCH_DATA } from "../../constants/error-messages";

export function clearRecommendations() {
    return { type: CLEAR_RECOMMENDATIONS }
}

export function getRecommendationlist(animeTitleList, filterOptions, filterGenreOptions) {

    return function (dispatch) {
      Promise.all([
        fetch(constructRecommendationURL(animeTitleList, "movie", filterOptions, filterGenreOptions)),
        fetch(constructRecommendationURL(animeTitleList, "tv", filterOptions, filterGenreOptions)),
        fetch(constructRecommendationURL(animeTitleList, "ona", filterOptions, filterGenreOptions)),
      ]).then(responses =>
        Promise.all(responses.map(response => response.json())
        )).then(responses => {
          const [movieResponse, tvResponse, onaRepsonse] = responses;
  
          const movieResults = filterDuplicateRecommendedAnime(animeTitleList, movieResponse.results)
          const tvResults = filterDuplicateRecommendedAnime(animeTitleList, tvResponse.results)
          const onaResults = filterDuplicateRecommendedAnime(animeTitleList, onaRepsonse.results)
  
          dispatch({ type: FIND_MOVIE_RECOMMENDATIONS, movieResults, animeTitleList })
          dispatch({ type: FIND_TV_RECOMMENDATIONS, tvResults, animeTitleList })
          dispatch({ type: FIND_ONA_RECOMMENDATIONS, onaResults, animeTitleList })
        }).catch(error => {
          const errorMessage = FAILED_TO_FETCH_DATA;
          dispatch({ type: LOAD_ERROR_MSG, errorMessage })
        })
    }
  }