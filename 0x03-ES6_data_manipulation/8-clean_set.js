export default function cleanSet(set, startString) {
  if (!startString) return '';
  let output = '';
  set.forEach((str) => {
    if (str.startsWith(startString)) {
      output += `${str.split(startString)[1]}-`;
    }
  });
  return output.slice(0, -1);
}
