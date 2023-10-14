export default function getListStudentIds(students) {
  if (typeof students !== 'object') return [];
  if (!students) return [];
  const ids = students.map((student) => (student.id));
  return ids;
}
