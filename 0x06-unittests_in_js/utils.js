const Utils = {
  calculateNumber(type, a, b) {
    const aR = Math.round(a);
    const bR = Math.round(b);

    if (bR === 0 && type === 'DIVIDE') {
      return 'Error';
    }

    switch (type) {
      case 'SUM':
        return aR + bR;
      case 'SUBTRACT':
        return aR - bR;
      case 'DIVIDE':
        return aR / bR;
      default:
        return 0;
    }
  },
};

module.exports = Utils;
