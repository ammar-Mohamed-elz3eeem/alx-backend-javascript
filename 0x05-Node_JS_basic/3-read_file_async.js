const fs = require('fs');

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

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(err);
    }
    const newData = data.toString().split('\n').slice(1, -1);
    console.log(`Number of students: ${newData.length}`);
    const obj = _studentsPerMajor(newData);
    for (const cls in obj) {
      if (cls) {
        console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
      }
    }
    resolve();
  });
});

module.exports = countStudents;
