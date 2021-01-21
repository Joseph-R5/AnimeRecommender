import {
    increaseRecommendedIndexHelper,
    decreaseRecommendedIndexHelper,
} from "../../util/";

import { getSectionIndexOption} from "../../util";

export function increaseRecommendedIndex(index, recommendedListLength, section) {
    const newCurrentIndex = increaseRecommendedIndexHelper(index, recommendedListLength)
    const getSectionType = getSectionIndexOption(section);
    return { type: getSectionType, newCurrentIndex }
}

export function decreaseRecommendedIndex(index, section) {
    const newCurrentIndex = decreaseRecommendedIndexHelper(index)
    const getSectionType = getSectionIndexOption(section)
    return { type: getSectionType, newCurrentIndex }
}
