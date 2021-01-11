import {
  ADD_ANIME,
  DELETE_ANIME,
  FIND_RECOMMENDATIONS,
  LOAD_ERROR_MSG,
  NO_RECOMMENDATIONS_FOUND
} from "../constants/action-types";

import {
  ANIME_ALREADY_EXISTS,
  NO_ANIME_TO_RECOMMEND,
  EMPTY_ANIME_LIST
} from "../constants/error-messages";

export const checkIfAnimeAlreadyExistsMiddleware = store => next => action => {
  switch (action.type) {
    case ADD_ANIME:
      const animeTitleSearch = action.animeResults.title
      const animeTitleList = store.getState().animeTitleList;

      if (animeTitleList.includes(animeTitleSearch)) {
        const payload = ANIME_ALREADY_EXISTS
        return next({ type: LOAD_ERROR_MSG, payload })
      }
      break;
    case FIND_RECOMMENDATIONS:
      if (action.filteredAnimeRecommendationList.length === 0) {
        const payload = NO_ANIME_TO_RECOMMEND
        return next({ type: NO_RECOMMENDATIONS_FOUND, payload })
      }
      break;
    case DELETE_ANIME:
      const animeTitleListCount = store.getState().animeTitleList.length;
      if (animeTitleListCount === 1) {
        const payload = EMPTY_ANIME_LIST;
        return next({ type: LOAD_ERROR_MSG, payload })
      }
      break;
    default:
      break;
  }

  return next(action)
}
