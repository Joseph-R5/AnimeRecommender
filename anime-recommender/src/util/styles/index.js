import { ONA } from "../../constants/filter-options";

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

export const convertAcronym = (section) => {
    return section === ONA ? "Original Net Animation" : section;
}

export const calculateSectionPaddingBottom = (width) => {
    if (width !== undefined) {
        if (width > 1763) {
            return 70;
        } else if (width >= 810) {
            return 450;
        } else if (width >= 590) {
            return 820;
        } else if (width > 0) {
            return 1900;
        }
    }
}
