export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let current = reportWithIterator.next();

  while (current.done !== true) {
    str += current.value;
    current = reportWithIterator.next();
    if (current.done !== true) {
      str += ' | ';
    }
  }

  return str;
}
