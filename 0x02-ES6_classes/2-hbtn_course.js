export default class HolbertonCourse {
  constructor(name, length, students) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (name) === 'string') { this._name = name; }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (length) === 'number') { this._length = length; }
    // eslint-disable-next-line no-underscore-dangle
    if (Array.isArray(students)) { this._students = students; }
  }

  // Getter and setter for name attribute
  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) !== 'string') { throw new TypeError('Name must be a string'); } else { this._name = value; }
  }

  // Getter and setter for length attribute
  // eslint-disable-next-line no-underscore-dangle
  get length() { return this._length; }

  set length(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) !== 'number') { throw new TypeError('Length must be a number'); } else { this._length = value; }
  }

  // Getter and Setter for students attribute
  // eslint-disable-next-line no-underscore-dangle
  get students() { return this._students; }

  set students(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (Array.isArray(value) === false) { throw new TypeError('Students must be an array'); } else { this._students = value; }
  }
}
