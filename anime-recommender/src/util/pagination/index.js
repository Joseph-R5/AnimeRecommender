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

const isPositive = (x) => {
    return x > -1;
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
