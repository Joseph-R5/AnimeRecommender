import {
    CHANGE_MOVIE_INDEX,
    CHANGE_TV_INDEX,
    CHANGE_OVA_INDEX,
    CHANGE_ONA_INDEX
} from "../../constants/action-types";

const initialState = {
  movieRecommendationIndex: 0,
  tvRecommendationIndex: 0,
  ovaRecommendationIndex: 0,
  onaRecommendationIndex: 0,
}

export default function paginations(state = initialState, action) {
    switch(action.type) {
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
        default:
            return state;
    }
}