export default function hasValuesFromArray(set, array) {
  for (let item = 0; item < array.length; item += 1) {
    if (!set.has(array[item])) {
      return false;
    }
  }
  return true;
}
