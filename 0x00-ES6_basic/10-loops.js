export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const idx of newArray) {
    newArray[idx] = `${appendString}${idx}`;
  }

  return newArray;
}
