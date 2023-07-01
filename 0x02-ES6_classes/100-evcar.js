import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // Getter - range
  // eslint-disable-next-line no-underscore-dangle
  get range() { return this._range; }

  // Setter - range
  set range(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') { this._range = value; } else { throw new TypeError('range must be a string'); }
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    // returns the new object of the parent class
    return new Car();
  }
}
