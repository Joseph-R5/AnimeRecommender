import { 
    UPDATE_GENRE_FILTER_LIST,
    LOAD_SPINNER
} from "../../constants/action-types";

export function updateGenreList(genreList, bool) {
    const updateGenreOptions = (genreList, dispatch) => new Promise((resolve, reject) => {
      dispatch({ type: UPDATE_GENRE_FILTER_LIST, genreList })
      resolve();
    })
  
    return (dispatch) => {
      updateGenreOptions(genreList, dispatch).then(() => {
        dispatch({ type: LOAD_SPINNER, bool })
      })
    }
  }