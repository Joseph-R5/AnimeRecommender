import {
    AIRING,
    FINISHED_AIRING,
    UPCOMING
} from "../constants/filter-options";

const filteredListData = [
    { title: FINISHED_AIRING, enabled: true },
    { title: AIRING, enabled: false },
    { title: UPCOMING, enabled: false }
]

export default filteredListData;