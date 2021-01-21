import {
    TV,
    ONA,
    MOVIE
} from "../../constants/filter-options";

import {
    CHANGE_MOVIE_INDEX,
    CHANGE_ONA_INDEX,
    CHANGE_TV_INDEX
} from "../../constants/action-types";

export const calculateAverageAnimeWatchTime = (numberOfEpisodes, isMovie) => {
    const multiplier = isMovie === 'movie' ? 120 : 25;
    return Math.round((numberOfEpisodes * multiplier) / 1440);
}

export const getSectionIndexOption = (section) => {
    switch (section) {
        case TV:
            return CHANGE_TV_INDEX
        case MOVIE:
            return CHANGE_MOVIE_INDEX
        case ONA:
            return CHANGE_ONA_INDEX
        default:
            break;
    }
}