export default function hasValuesFromArray(set, arr) {
  return arr.every((elem) => set.has(elem));
}
