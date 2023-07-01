export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  // Getter - brand
  // eslint-disable-next-line no-underscore-dangle
  get brand() { return this._brand; }

  // Setter - brand
  set brand(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._brand = value; } else { throw new TypeError('brand must be a string'); }
  }

  // Getter - motor
  // eslint-disable-next-line no-underscore-dangle
  get motor() { return this._motor; }

  // Setter - motor
  set motor(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._motor = value; } else { throw new TypeError('motor must be a string'); }
  }

  // Getter - color
  // eslint-disable-next-line no-underscore-dangle
  get color() { return this._color; }

  // Setter - color
  set color(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._color = value; } else { throw new TypeError('color must be a string'); }
  }

  cloneCar() {
    // Returns the new object of the current class
    return new this.constructor();
  }
}
