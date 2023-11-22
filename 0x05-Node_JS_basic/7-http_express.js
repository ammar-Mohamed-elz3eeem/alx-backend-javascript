const express = require('express');
const fs = require('fs');

const app = express();

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

const countStudents = (dbPath) => new Promise((res, rej) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      rej(new Error('Cannot load the database'));
    }
    if (data) {
      const newData = data.toString().split('\n').slice(1, -1);
      let str = (`Number of students: ${newData.length}\n`);
      const obj = _studentsPerMajor(newData);
      for (const cls in obj) {
        if (cls) {
          str += (`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}\n`);
        }
      }
      res(str);
    }
  });
});

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.header('Content-Type', 'text/plain');
  const responseParts = ['This is the list of our students'];
  countStudents(process.argv[2]).then((data) => {
    responseParts.push(data);
    const responseText = responseParts.join('\n');
    res.send(Buffer.from(responseText));
  }).catch((err) => {
    responseParts.push(err instanceof Error ? err.message : err.toString());
    const responseText = responseParts.join('\n');
    res.send(Buffer.from(responseText));
  });
});

app.listen(1245);

module.exports = app;
