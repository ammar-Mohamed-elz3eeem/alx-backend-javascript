export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const arr = [];
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      arr.push(str.slice(startString.length));
    }
  });
  return arr.join('-');
}
