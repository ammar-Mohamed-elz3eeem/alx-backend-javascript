import readDatabase from "../utils";

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      let output = ['This is the list of our students'];
      const compareFunction = (a, b) => a[0].toLowerCase() > b[0].toLowerCase();
      for (const [field, students] of Object.entries(data).sort(compareFunction)) {
        output.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      return response.status(200).send(output.join('\n'));
    } catch (e) {
      return response.status(500).send('Cannot load the database: ' + e.toString());
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['SWE', 'CS'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(process.argv[2]);
      let responseText;
      if (Object.keys(data).includes(major)) {
        const group = data[major];
        responseText = `List: ${group.join(', ')}`;
      }
      return response.status(200).send(responseText);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
