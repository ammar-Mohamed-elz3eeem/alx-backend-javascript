const fs = require('fs');

const readDatabase = (dbPath) => new Promise((resolve, reject) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    }
    if (data) {
      const students = data.toString().split('\n').slice(1, -1);
      const result = students.reduce((acc, currentStudent) => {
        const student = currentStudent.split(',');
        if (!acc[student[3]]) {
          acc[student[3]] = [student[0]];
        } else {
          acc[student[3]].push(student[0]);
        }
        return acc;
      }, {});
      resolve(result);
    }
  });
});

export default readDatabase;
