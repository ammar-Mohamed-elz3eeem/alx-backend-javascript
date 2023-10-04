/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }

  export class React extends Subjects.Subject {
    public teacher: Subjects.Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`
      }
      return 'No available teacher';
    }
  }
};
