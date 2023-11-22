const fs = require('fs');

const _studentsPerMajor = (students) => {
  const obj = {};
  students.forEach(el => {
    const student = el.split(',');
    if (!obj[student[3]]) {
      obj[student[3]] = [student[0]];
    } else {
      obj[student[3]].push(student[0]);
    }
  });
  return obj;
};

const countStudents = (path) => {
  try {
    const buffer = fs.readFileSync(path);
    const students = buffer.toString().split('\n').slice(1, -1);
    console.log(`Number of students: ${students.length}`);
    const obj = _studentsPerMajor(students);
    for (const cls in obj) {
      console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
