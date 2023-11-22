const fs = require('fs/promises');

const _studentsPerMajor = (students) => {
  const obj = {};
  students.forEach((el) => {
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
  return new Promise(async (resolve, reject) => {
    try {
      const buffer = await fs.readFile(path);
      const students = buffer.toString().split('\n').slice(1, -1);
      console.log(`Number of students: ${students.length}`);
      const obj = _studentsPerMajor(students);
      for (const cls in obj) {
        if (cls) {
          console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      resolve();
    } catch (err) {
      reject(Error('Cannot load the database'));
    }
  });
};

module.exports = countStudents;
