export default class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof size === 'number') { this._size = size; } else { throw new TypeError('size must be a number'); }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof location === 'string') { this._location = location; } else { throw new TypeError('location must be a string'); }
  }

  // Getter - size
  // eslint-disable-next-line no-underscore-dangle
  get size() { return this._size; }

  // Setter - size
  set size(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') { this._size = value; } else { throw new TypeError('size must be a number'); }
  }

  // Getter - location
  // eslint-disable-next-line no-underscore-dangle
  get location() { return this._location; }

  // Setter - location
  set location(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._location = value; } else { throw new TypeError('location must be a string'); }
  }

  valueOf() {
    // Modify the return value when the class is cast into a number
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  toString() {
    // Modify the return value when the class is cast into a string
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}
