import {
  ADD_ANIME,
  DELETE_ANIME,
  FIND_RECOMMENDATIONS,
  LOAD_ERROR_MSG,
  NO_RECOMMENDATIONS_FOUND,
  LOAD_ANIME_LIST_SPINNER
} from "../constants/action-types";

import {
  ANIME_ALREADY_EXISTS,
  NO_ANIME_TO_RECOMMEND,
  EMPTY_ANIME_LIST
} from "../constants/error-messages";

export const checkIfAnimeAlreadyExistsMiddleware = store => next => action => {
  switch (action.type) {
    case ADD_ANIME:
      // TODO
      // Error handler here if no such exists (test with Anime: Moldiver)
      const animeTitleSearch = action.animeResults.title;
      const animeTitleList = store.getState().animeListReducer.animeTitleList;

      if (animeTitleList.includes(animeTitleSearch)) {
        const payload = ANIME_ALREADY_EXISTS
        const load = false;

        next({ type: LOAD_ANIME_LIST_SPINNER, load })
        return next({ type: LOAD_ERROR_MSG, payload })
      }
      break;
    case FIND_RECOMMENDATIONS:
      if (action.filteredAnimeRecommendationList.length === 0) {
        return next({ type: NO_RECOMMENDATIONS_FOUND, NO_ANIME_TO_RECOMMEND })
      }
      break;
    case DELETE_ANIME:
      const animeTitleListCount = store.getState().animeListReducer.animeTitleList.length;
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
