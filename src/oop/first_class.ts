/* eslint-disable @typescript-eslint/no-magic-numbers */
class Person {
  name: string
  age: number
  createdAt: Date
  height: number

  constructor(name: string, age: number, createdAt: Date, height: number) {
    this.name = name
    this.age = age
    this.createdAt = createdAt
    this.height = height
  }

  showInfo(): string {
    return `${this.name} is ${this.age} old.`
  }

  toString(): string {
    return this.showInfo()
  }
}

const ronald = new Person('Ronald', 35, new Date(), 1.72)
console.log(ronald)
ronald.name = 'Ron'
console.log(ronald)

const johnny = new Person('Johnathan', 35, new Date(), 1.72)
console.log(johnny.showInfo())
console.log('Person ' + johnny.showInfo())
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
console.log('Person ' + johnny)
