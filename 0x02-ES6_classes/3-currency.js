export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Curreny code must be string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Curreny name must be string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(ccode) {
    if (typeof ccode !== 'string') {
      throw new TypeError('Curreny code must be string');
    }
    this._code = ccode;
  }

  get name() {
    return this._name;
  }

  set name(cname) {
    if (typeof cname !== 'string') {
      throw new TypeError('Curreny name must be string');
    }
    this._name = cname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
