import { toggleModal } from "./modal";
import { setMobileOpen } from "./mobile";
import { getRecommendationlist, clearRecommendations } from "./recommendations";
import { increaseRecommendedIndex, decreaseRecommendedIndex } from "./pagination";
import { loadSpinner } from "./loader";
import { updateGenreList } from "./genre";
import { toggleFilterButton } from "./filter";
import { autoCompleteSearchBar, updateQuery, clearAutoCompleteSuggestions } from "./search";
import { closeErrorMessage } from "./errorHandler";
import { deleteAnimeFromList, addAnime } from "./animeList";

export {
  toggleModal,
  setMobileOpen,
  getRecommendationlist,
  clearRecommendations,
  increaseRecommendedIndex,
  decreaseRecommendedIndex,
  loadSpinner,
  updateGenreList,
  toggleFilterButton,
  autoCompleteSearchBar, 
  updateQuery, 
  clearAutoCompleteSuggestions,
  closeErrorMessage,
  deleteAnimeFromList,
  addAnime
}