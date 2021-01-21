import { FINISHED_AIRING, AIRING, UPCOMING } from "../../constants/filter-options";

export const constructRecommendationURL = (animeTitleList, sectionType, filterOptions, filterGenreOptions) => {
    let base = "https://api.jikan.moe/v3/search/anime?q=" + animeTitleList
        + "/recommendation&order_by=score"

    base = addFilterOptions(base, filterOptions);
    base = addGenreOptions(base, filterGenreOptions);
    base = base.concat("&type=" + sectionType);
    base = base.concat("&limit=20");

    return base;
}

export const getExactAnimeFromAPI = (animeTitle, payloadResults) => {
    return payloadResults.find(anime => anime.title === animeTitle);
}

const addFilterOptions = (base, filterOptions) => {
    filterOptions.forEach((option) => {
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

const addGenreOptions = (base, genreOptions) => {
    if (genreOptions) {
        genreOptions.forEach((genre) => {
            base.includes("&genre") ? base = base.concat("," + genre.id) : base = base.concat("&genre=" + genre.id)
        })
    }

    return base;
}