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

export const loadRecommendations = (movies, tvs, onas) => {
    if (movies.length > 0 || tvs.length > 0 || onas.length > 0) {
        return true;
    }
    return false;
}


