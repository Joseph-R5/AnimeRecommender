import { 
    UPDATE_GENRE_FILTER_LIST
} from "../../constants/action-types";

export function updateGenreList(genreList) {  
    return (dispatch) => {
      dispatch({ type: UPDATE_GENRE_FILTER_LIST, genreList })
    }
  } 