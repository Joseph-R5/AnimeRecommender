import {
    increaseRecommendedIndexHelper,
    decreaseRecommendedIndexHelper,
    showArrowBack,
    showArrowNext,
    getPaginationPageCount,
    getAllPaginationCounts,
    getActivePage
} from "./pagination";

import {
    constructRecommendationURL,
    getExactAnimeFromAPI
} from "./api";

import {
    calculateScrollDrawerPosition,
    calculateDrawerWidth,
    convertAcronym
} from "./styles";

import {
    calculateAverageAnimeWatchTime,
    getSectionIndexOption
} from "./info";  

import {
    animeRecommendationListSlicer, 
    filterDuplicateRecommendedAnime,
    loadRecommendations,
    hasOneSection
} from "./animeList";

import { numberFormatter } from "./number";
import { timestampConverter } from "./timestamp";

export {
    increaseRecommendedIndexHelper,
    decreaseRecommendedIndexHelper,
    showArrowBack,
    showArrowNext,
    getPaginationPageCount,
    numberFormatter,
    getAllPaginationCounts,
    getActivePage,
    constructRecommendationURL,
    timestampConverter,
    getExactAnimeFromAPI,
    calculateScrollDrawerPosition,
    calculateDrawerWidth,
    calculateAverageAnimeWatchTime,
    convertAcronym,
    getSectionIndexOption,
    animeRecommendationListSlicer, 
    filterDuplicateRecommendedAnime,
    loadRecommendations,
    hasOneSection
}