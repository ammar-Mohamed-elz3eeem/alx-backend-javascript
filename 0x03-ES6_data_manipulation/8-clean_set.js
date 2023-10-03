export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
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
