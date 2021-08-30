// student v-v-b
//https://exercism.io/mentor/solutions/2b5b187a646f4c57bff80b051595be7a?iteration_idx=2#discussion-post-975467
export default class GradeSchool {
  private readonly db: Map<string, Set<string>> = new Map();

  studentRoster(): Map<string, string[]> {
    return new Map(
      [...this.db].map(([grade, students]) => [grade, [...students]])
    );
  }

  addStudent(name: string, grade: number): void {
    this.removeStudent(name);
    this.db.set(
      `${grade}`,
      new Set([...this.studentsInGrade(grade), name].sort())
    );
  }

  studentsInGrade(grade: number): string[] {
    return [...(this.db.get(`${grade}`) || [])];
  }

  private removeStudent(name: string): void {
    for (const [_grade, students] of this.db) {
      if (students.delete(name)) {
        break;
      }
    }
  }
}
