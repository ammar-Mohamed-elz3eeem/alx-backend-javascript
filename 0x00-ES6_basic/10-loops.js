export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];

  for (const el of array) {
    newArr.push(appendString + el);
  }

  return newArr;
}
