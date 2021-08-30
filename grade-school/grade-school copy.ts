type StudentDB<T> = Map<T, string[]>

export default class GradeSchool {

  private db: StudentDB<number> = new Map()
/*
  gradeSchool.addStudent('Blair', 2)
  gradeSchool.addStudent('James', 2)
  gradeSchool.addStudent('Paul', 2)

  const expectedDb = new Map(
    Object.entries({ 2: ['Blair', 'James', 'Paul'] })
*/
  studentRoster(): StudentDB<string> {
    const result: StudentDB<string> = new Map()
    const grades = this.db.keys()
    for (const grade of grades) {
      result.set(grade.toString(), this.studentsInGrade(grade))
    }
    return result
  }

  addStudent(student: string, grade: number) {
    // Add all other students
    for (const [gradeDb, studentNamesDb] of this.db) {
      const filteredStudent = studentNamesDb.filter(studentName => studentName !== student)
      this.db.set(gradeDb, filteredStudent)
    }
    //Now add current student
    const gradeStudents = (this.db.get(grade) || []).concat(student)
    this.db.set(grade, gradeStudents)
  }

  studentsInGrade(grade: number): string[] {
    const gradeStudents = (this.db.get(grade) || [])
    return Array.from(gradeStudents).sort().slice()
  }

}
