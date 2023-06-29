export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof code === 'string') { this._code = code; } else { this._code = ''; }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof name === 'string') { this._name = name; } else { this._name = ''; }
  }

  // Getter for code
  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // Setter for code
  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._code = value; } else { throw new TypeError('Code must be a string'); }
  }

  // Getter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  // Setter for name
  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._name = value; } else { throw new TypeError('Name must be a string'); }
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
