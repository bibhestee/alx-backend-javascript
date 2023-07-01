const checkArray = (array) => {
  if (!Array.isArray(array)) return false;

  for (const element of array) {
    if (typeof (element) !== 'string') return false;
  }
  return true;
};

export default class HolbertonCourse {
  constructor(name, length, students) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (name) === 'string') { this._name = name; } else { throw new TypeError('Name must be a string'); }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (length) === 'number') { this._length = length; } else { throw new TypeError('Length must be a number'); }
    // eslint-disable-next-line no-underscore-dangle
    if (checkArray(students)) { this._students = students; } else { throw new TypeError('Students must be an array of strings'); }
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
    if (!checkArray(value)) { throw new TypeError('Students must be an array of Strings'); } else { this._students = value; }
  }
}
