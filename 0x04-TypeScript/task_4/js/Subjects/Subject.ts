/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    public teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
};
