const http = require('http');
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
      res(str.trim());
    }
  });
});

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const responseArray = ['This is the list of our students'];
    try {
      const students = await countStudents(process.argv[2]);
      responseArray.push(students);
      const responseText = responseArray.join('\n');
      res.write(Buffer.from(responseText));
      res.end();
    } catch (err) {
      responseArray.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseArray.join('\n');
      res.write(Buffer.from(responseText));
      res.end();
    }
  }
});

app.listen(1245);

module.exports = app;
