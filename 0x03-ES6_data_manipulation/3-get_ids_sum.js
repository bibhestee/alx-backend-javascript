export default function getStudentIdsSum(students) {
  if (typeof students !== 'object') return [];
  if (!students) return [];
  const idsSum = students.reduce((total, current) => (total + current.id), 0);
  return idsSum;
}
