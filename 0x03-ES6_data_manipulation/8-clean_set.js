export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const arr = [];
  set.forEach((str) => {
    if (typeof str === 'string' && str.startsWith(startString)) {
      const valueStr = str.slice(startString.length);
      if (valueStr && valueStr !== str) {
        arr.push(valueStr);
      }
    }
  });
  return arr.join('-');
}
