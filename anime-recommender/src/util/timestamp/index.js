export const timestampConverter = (val) => {
    var date = new Date(val);
    return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
}
