interface ICourse {
  title: string
  description?: string
  price: number
  totalTime: number
  classificationScore: number
}

const course: ICourse = {
  title: 'Typescript',
  price: 2000,
  totalTime: 5,
  classificationScore: 5,
}
console.log(course)
// {
//   title: 'Typescript',
//   price: 2000,
//   totalTime: 5,
//   classificationScore: 5
// }
course.title = 'Javascript'
// All parameters allows change of it's values
console.log(course)
// {
//   title: 'Javascript',
//   price: 2000,
//   totalTime: 5,
//   classificationScore: 5
// }

// Adding readonly property

interface ICourse2 {
  readonly title: string
  description?: string
  price: number
  totalTime: number
  classificationScore: number
}
const course2: ICourse2 = {
  title: 'Typescript',
  price: 2000,
  totalTime: 5,
  classificationScore: 5,
}
console.log(course2)
// {
//   title: 'Typescript',
//   price: 2000,
//   totalTime: 5,
//   classificationScore: 5
// }
// course2.title = 'Javascript'// Cannot assign to 'title' because it is a read-only property.
