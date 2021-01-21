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





