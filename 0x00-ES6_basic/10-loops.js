export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const idx of newArray) {
    const value = newArray[idx];
    newArray[idx] = appendString + value;
  }

  return newArray;
}
