import { 
    CLEAR_RECOMMENDATIONS,
    FIND_MOVIE_RECOMMENDATIONS,
    FIND_TV_RECOMMENDATIONS,
    FIND_ONA_RECOMMENDATIONS
} from "../../constants/action-types"

import {
    
} from "../../util/animeList";

import { constructRecommendationURL, filterDuplicateRecommendedAnime} from "../../util";

import { FAILED_TO_FETCH_DATA } from "../../constants/error-messages";

import { loadErrorMessage } from "../errorHandler";

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
          loadErrorMessage(dispatch, errorMessage)
        })
    }
  }