export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return {
      ...student, grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
