export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  let output = '';
  set.forEach((str) => {
    if (!str) return;
    if (str.startsWith(startString)) {
      output += `${str.split(startString)[1]}-`;
    }
  });
  return output.slice(0, -1);
}
