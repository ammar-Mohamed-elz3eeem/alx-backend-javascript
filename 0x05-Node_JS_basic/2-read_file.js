const fs = require('fs');

const _studentsPerMajor = (students) => {
  const studentsPerMajor = students.reduce((prev, current) => {
    const Obj = { ...prev };
    if (Object.keys(prev).includes(current.field)) {
      Obj[current.field].push(current);
    } else {
      Obj[current.field] = [current];
    }
    return Obj;
  }, {});
  Object.keys(studentsPerMajor).forEach((key) => {
    console.log(`Number of students in ${key}: ${studentsPerMajor[key].length}. List: ${studentsPerMajor[key].map((student) => student.firstname).join(', ')}`);
  });
};

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const buffer = fs.readFileSync(path);
  const content = buffer.toString().split('\n').slice(1).map((student) => {
    const studentInfo = student.split(',');
    return {
      firstname: studentInfo[0],
      lastname: studentInfo[1],
      age: studentInfo[2],
      field: studentInfo[3],
    };
  });
  console.log(`Number of students: ${content.length}`);
  _studentsPerMajor(content);
};

module.exports = countStudents;
