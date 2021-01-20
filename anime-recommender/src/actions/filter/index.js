import {
    TOGGLE_FILTER_BUTTON
} from "../../constants/action-types";

export function toggleFilterButton(option) {
    return { type: TOGGLE_FILTER_BUTTON, option }
}
