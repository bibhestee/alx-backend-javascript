export default function getStudentByLocation(students, city) {
  if (typeof students !== 'object') return [];
  if (!students) return [];
  const studentByLocation = students.filter((student) => (student.location === city));
  return studentByLocation;
}
