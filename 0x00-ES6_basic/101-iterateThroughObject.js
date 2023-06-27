export default function iterateThroughObject(reportWithIterator) {
  let outputString = '';
  const lastItem = reportWithIterator.pop();
  for (const item of reportWithIterator) { outputString += `${item} | `; }
  return `${outputString}${lastItem}`;
}
