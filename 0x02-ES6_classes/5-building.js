export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof sqft === 'number') { this._sqft = sqft; } else { throw new TypeError('SQFT must be a number'); }
    // any class that extends from Building must implement a method named evacuationWarningMessage
    if (new.target !== Building && this.evacuationWarningMessage === undefined) { throw new Error('Class extending Building must override evacuationWarningMessage'); }
  }

  // Getter method for sqft
  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  // Setter method for sqft
  set sqft(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') { this._sqft = value; } else { throw new TypeError('SQFT must be a number'); }
  }
}
