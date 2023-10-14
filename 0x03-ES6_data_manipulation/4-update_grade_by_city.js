export default function updateStudentGradeByCity(students, city, newGrades) {
  if (typeof students !== 'object') return [];
  if (typeof newGrades !== 'object') return [];
  if (!students) return [];
  if (!newGrades) return [];
  const filteredList = students.filter((student) => (student.location === city));
  const updatedStudent = filteredList.map((student) => {
    const newStd = student;
    const obj = newGrades.filter((data) => (data.studentId === student.id));
    if (!obj[0]) {
      newStd.grade = 'N/A';
    } else {
      newStd.grade = obj[0].grade;
    }
    return newStd;
  });
  return updatedStudent;
}
