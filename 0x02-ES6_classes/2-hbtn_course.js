export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') { this._name = name; }
    if (typeof (length) === 'number') { this._length = length; }
    if (Array.isArray(students)) { this._students = students; }
  }

  // Getter and setter for name attribute
  get name() { return this._name; }

  set name(value) {
    if (typeof (value) !== 'string') { throw new TypeError('Name must be a string'); } else { this._name = value; }
  }

  // Getter and setter for length attribute
  get length() { return this._length; }

  set length(value) {
    if (typeof (value) !== 'number') { throw new TypeError('Length must be a number'); } else { this._length = value; }
  }

  // Getter and Setter for students attribute
  get students() { return this._students; }

  set students(value) {
    if (Array.isArray(value) === false) { throw new TypeError('Students must be an array'); } else { this._students = value; }
  }
}
