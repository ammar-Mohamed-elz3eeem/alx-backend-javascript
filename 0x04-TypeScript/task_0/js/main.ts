export interface Student {
  firstname: string,
  lastname: string,
  age: number,
  location: string
};

const student1: Student = {
  firstname: "Ammar",
  lastname: "Massoud",
  age: 25,
  location: "Alexandria"
};

const student2: Student = {
  firstname: "Ahmed",
  lastname: "Hassan",
  age: 54,
  location: "Qena"
};

const students: Array<Student> = [
  student1,
  student2
];

const table: HTMLTableElement = document.createElement("table");
students.forEach(student => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const name: HTMLTableCellElement = row.insertCell();
  const location: HTMLTableCellElement = row.insertCell();
  name.innerHTML = student.firstname;
  location.innerHTML = student.location;
  table.insertAdjacentElement("beforeend", row);
});
document.body.insertAdjacentElement("beforeend", table);
