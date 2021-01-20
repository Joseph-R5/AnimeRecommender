import { combineReducers } from 'redux';
import recommendations from "./recommendations/recommendationsReducer";
import paginations from "./pagination/paginationReducer";
import genres from "./genre/genreReducer";
import errorHandler from "./errorHandler/errorHandlerReducer";
import loader from "./loader/loaderReducer";
import mobileReducer from "./mobile/mobileReducer";
import modalReducer from "./modal/modalReducer";
import search from "./search/searchReducer";
import filters from "./filter/filterReducer";
import animeListReducer from "./animeList/animeListReducer";

const reducer = combineReducers({
  recommendations,
  paginations,
  genres,
  errorHandler,
  mobileReducer,
  modalReducer,
  search,
  filters,
  loader,
  animeListReducer
})

export default reducer;