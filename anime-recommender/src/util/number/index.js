export const numberFormatter = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}