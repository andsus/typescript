type StudentDB<T> = Map<T, Set<string>>

export default class GradeSchool {

  private db: StudentDB<number> = new Map()

  studentRoster(): Map<string, string[]> {
    // return new Map(
    //   // [...this.db].map(([grade, students]) => [grade.toString(), [...students].sort()])
    //   [...this.db].map(([grade, _]) => [grade.toString(), this.studentsInGrade(grade)])
    // );
   
    const result = new Map()
    const grades = this.db.keys()
    for (const grade of grades) {
      result.set(grade.toString(), this.studentsInGrade(grade))
    }
    return result
   
  }

  addStudent(student: string, grade: number) {
    // Remove student from db
    for (const studentNames of this.db.values()) {
      studentNames.delete(student)
    }
    
    //Now add current student
    const gradeStudents = (this.db.get(grade) ?? new Set<string>()).add(student)
    this.db.set(grade, gradeStudents)
  }

  studentsInGrade(grade: number): string[] {
    const gradeStudents = (this.db.get(grade) ?? new Set())
    return Array.from(gradeStudents).sort()
  }

}
