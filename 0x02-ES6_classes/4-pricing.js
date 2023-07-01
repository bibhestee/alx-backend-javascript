// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof amount === 'number') { this._amount = amount; } else { throw new TypeError('Amount must be a number'); }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof currency === 'object') { this._currency = currency; } else { throw new TypeError('Currency must be a class Currency'); }
  }

  // Getter for amount
  // eslint-disable-next-line no-underscore-dangle
  get amount() { return this._amount; }

  // Setter for amount
  set amount(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') { this._amount = value; } else { throw new TypeError('Amount must be a number'); }
  }

  // Getter for currency
  // eslint-disable-next-line no-underscore-dangle
  get currency() { return this._currency; }

  // Setter for currency
  set currency(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'object') { this._currency = value; } else { throw new TypeError('Currency must be a class Currency'); }
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and ConversionRate must be a number');
  }
}
