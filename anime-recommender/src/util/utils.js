import {
    AIRING,
    TV,
    FINISHED_AIRING,
    MOVIE,
    UPCOMING,
    OVA,
    ONA
} from "../constants/filter-options";

import {
    CHANGE_ONA_INDEX,
    CHANGE_TV_INDEX,
    CHANGE_MOVIE_INDEX,
    CHANGE_OVA_INDEX
} from "../constants/action-types";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

export const roundTo2DP = (val) => {
    return val.toFixed(1);
}

export const timestampConverter = (val) => {
    var date = new Date(val);
    return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
}

export const numberFormatter = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const decodeHTMLEntities = (text) => {
    text.replace(":", " ");
    text.replace(" ", "-");
    return text;
}

export const filterDuplicateRecommendedAnime = (animeList, recommendedAnimeList) => {
    return recommendedAnimeList.filter((anime) => {
        return !animeList.includes(anime.title)
    })
}

export const animeRecommendationListSlicer = (index, recommendedAnimeList, isMobile) => {
    let newRecommendedAnimeList = [];
    const adder = isMobile ? 2 : 6;

    for (let i = index; i < index + adder; i++) {
        if (recommendedAnimeList[i]) {
            newRecommendedAnimeList.push(recommendedAnimeList[i])
        }
    }

    return newRecommendedAnimeList;
}

export const increaseRecommendedIndexHelper = (currentIndex, recommendedListLength) => {
    let newCurrentIndex = currentIndex + 5;
    while (newCurrentIndex + 6 > recommendedListLength) {
        newCurrentIndex--;
    }

    return newCurrentIndex;
}

export const decreaseRecommendedIndexHelper = (currentIndex) => {
    let newCurrentIndex = currentIndex - 5;
    while (newCurrentIndex < 0) {
        newCurrentIndex++;
    }

    return newCurrentIndex;
}

export const showArrowBack = (currentIndex) => {
    return currentIndex === 0 ? 'hidden' : 'visible';
}

export const showArrowNext = (currentIndex, listLength) => {
    return currentIndex + 6 >= listLength ? 'hidden' : 'visible';
}

export const setOpacityOfFilterButton = (enabled) => {
    return enabled ? 1.0 : 0.3;
}

export const constructRecommendationURL = (animeTitleList, sectionType, filterOptions, filterGenreOptions) => {
    let base = "https://api.jikan.moe/v3/search/anime?q=" + animeTitleList
        + "/recommendation&order_by=score"

    base = addFilterOptions(base, filterOptions);
    base = addGenreOptions(base, filterGenreOptions);
    base = base.concat("&type=" + sectionType);
    base = base.concat("&limit=20");

    return base;
}

export const addFilterOptions = (base, filterOptions) => {
    filterOptions.map((option) => {
        if (option.enabled) {
            switch (option.title) {
                case FINISHED_AIRING:
                    base.includes("&status") ? base = base.concat(",completed") : base = base.concat("&status=completed")
                    break;
                case AIRING:
                    base.includes("&status") ? base = base.concat(",airing") : base = base.concat("&status=airing")
                    break;
                case UPCOMING:
                    base.includes("&status") ? base = base.concat(",to_be_aired") : base = base.concat("&status=to_be_aired")
                    break;
                default:
                    break;
            }
        }
    })
    return base;
}

export const addGenreOptions = (base, genreOptions) => {
    if (genreOptions) {
        genreOptions.map((genre) => {
            base.includes("&genre") ? base = base.concat("," + genre.id) : base = base.concat("&genre=" + genre.id)
        })
    }

    return base;
}

export const getSectionIndexOption = (section) => {
    switch (section) {
        case TV:
            return CHANGE_TV_INDEX
        case MOVIE:
            return CHANGE_MOVIE_INDEX
        case OVA:
            return CHANGE_OVA_INDEX
        case ONA:
            return CHANGE_ONA_INDEX
        default:
            break;
    }
}

export const getExactAnimeFromAPI = (animeTitle, payloadResults) => {
    return payloadResults.find(anime => anime.title === animeTitle);
}

export const calculateScrollDrawerPosition = (positionY) => {
    let base = 215 + positionY;
    let yAxis = base - (positionY * 2)

    if (yAxis <= 0) {
        return 0;
    }

    return yAxis;
}

export const calculateDrawerWidth = (positionX) => {
    if (positionX !== undefined) {
        if (positionX > 1650) {
            return 317;
        } else if (positionX > 1410) {
            return 270;
        } else if (positionX > 1130) {
            return 233;
        } else if (positionX >= 1024) {
            return 223;
        } else { 
            return 0;
        }
    }
}

export const getPaginationPageCount = (listLength) => {
    let count = 0;
    let tmp = [count];

    for (let i = 0; i < 4; i++) {
        count = increaseRecommendedIndexHelper(count, listLength)
        if (!tmp.includes(count)) {
            tmp.push(count)
        }
    }
    return tmp.filter((x) => isPositive(x));
}

export const isPositive = (x) => {
    return x > -1;
}

export const getActivePage = (index, pageIndex, paginationPageCount) => {
    const newPaginationPageCount = getAllPaginationCounts(paginationPageCount);
    if (paginationPageCount[pageIndex] === index) {
        return "circleActive";
    } else if (newPaginationPageCount[pageIndex - 1] === index) {
        return "circleActive";
    } else {
        return "circle"
    }
}

export const getAllPaginationCounts = (paginationPageCount) => {
    let tmp = []
    let max = paginationPageCount[paginationPageCount.length - 1]
    for (let i = 0; i < 3; i++) {
        max = decreaseRecommendedIndexHelper(max)
        if (!tmp.includes(max) && max !== 0) {
            tmp.push(max)
        }
    }

    return tmp.reverse();
}

export const calculateAverageAnimeWatchTime = (numberOfEpisodes, isMovie) => {
    const multiplier = isMovie === 'movie' ? 120 : 25;
    return Math.round((numberOfEpisodes * multiplier) / 1440);
}