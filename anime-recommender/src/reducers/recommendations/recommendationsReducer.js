import {
    FIND_MOVIE_RECOMMENDATIONS,
    FIND_TV_RECOMMENDATIONS,
    FIND_ONA_RECOMMENDATIONS,
    FIND_OVA_RECOMMENDATIONS
} from "../../constants/action-types";

const initialState = {
  movieRecommendations: [],
  tvRecommendations: [],
  ovaRecommendations: [],
  onaRecommendations: [],
}

export default function recommendations(state = initialState, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}