import { combineReducers } from 'redux';
import recommendations from "./recommendationsReducer";
import paginations from "./paginationReducer";
import genres from "./genreReducer";
import errorHandler from "./errorHandlerReducer";
import loader from "./loaderReducer";
import mobileReducer from "./mobileReducer";
import modalReducer from "./modalReducer";
import search from "./searchReducer";
import filters from "./filterReducer";
import animeListReducer from "./animeListReducer";

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