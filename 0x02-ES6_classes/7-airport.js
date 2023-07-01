export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof name === 'string') { this._name = name; } else { throw new TypeError('Name must be a string'); }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof code === 'string') { this._code = code; } else { throw new TypeError('Code must be a string'); }
  }

  // Getter - name
  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  // Setter - name
  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._name = value; } else { throw new TypeError('Name must be a string'); }
  }

  // Getter - code
  // eslint-disable-next-line no-underscore-dangle
  get code() { return this._code; }

  // Setter - code
  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._code = value; } else { throw new TypeError('Code must be a string'); }
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return `[object ${this._code}]`;
  }
}
