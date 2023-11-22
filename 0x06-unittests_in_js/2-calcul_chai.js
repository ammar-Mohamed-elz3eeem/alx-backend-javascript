function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);

  if (b == 0 && type == 'DIVIDE') {
    return 'Error';
  }

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      return a / b;
    default:
      return 0;
  }
}

module.exports = calculateNumber;
