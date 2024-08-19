class Teacher {
  name: string
  age: number
  subject: string

  constructor(name: string, age: number, subject: string) {
    this.name = name
    this.age = age
    this.subject = subject
  }

  selfPresent(): string {
    return `My Name ${this.name}, I'm ${this.age} years old and I'll teach the subject of ${this.subject}!`
  }

  private calculateStudentScores(...scores: number[]): number {
    const avgScore = scores.reduce(
      (acc, currentVal) => acc + currentVal / scores.length,
      0
    )
    return avgScore
  }

  informStudentScore(...scores: number[]): string {
    const avgScore = this.calculateStudentScores(...scores)
    return `Your average score is ${avgScore}!`
  }
}
const teacherName = 'John'
const age = 46
const subject = 'Microsoft SQL Server'
const newTeacher1 = new Teacher(teacherName, age, subject)

console.log(newTeacher1.selfPresent())
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const score1 = [5, 7, 8, 10, 8]

console.log(newTeacher1.informStudentScore(...score1))
