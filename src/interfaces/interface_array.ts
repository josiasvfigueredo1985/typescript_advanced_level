interface ICategory {
  name: string
  id: number
  parentCategory?: ICategory
}

const frontEnd: ICategory = {
  name: 'Frontend',
  id: 2,
  parentCategory: {
    name: 'Programming Language',
    id: 1,
  },
}
const backEnd: ICategory = {
  name: 'Backend',
  id: 3,
  parentCategory: {
    name: 'Programming Language',
    id: 1,
  },
}

interface IMenu {
  categories: ICategory[]
}

const menu: IMenu = { categories: [] }
console.log(menu.categories) // []
menu.categories.push(frontEnd, backEnd)
console.log(menu)
// {
//   categories: [
//     { name: 'Frontend', id: 2, parentCategory: [Object] },
//     { name: 'Backend', id: 3, parentCategory: [Object] }
//   ]
// }

console.log(menu.categories)
// [
//   ({
//     name: 'Frontend',
//     id: 2,
//     parentCategory: { name: 'Programming Language', id: 1 },
//   },
//   {
//     name: 'Backend',
//     id: 3,
//     parentCategory: { name: 'Programming Language', id: 1 },
//   })
// ]

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface ITodo {
  [indx: number]: string
}

let mysTasks: ITodo[]
mysTasks = ['Learn More Typescript', 'Learn about Generics']
console.log(mysTasks[1]) // Learn about Generics
mysTasks = ['Learn about API', 'Learn about Mocks']
console.log(mysTasks[0]) // Learn about API
