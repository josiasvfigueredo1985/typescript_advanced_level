interface IModel {
  id: number
  createdAt: number
  updatedAt: number
}

interface IPerson extends IModel {
  name: string
  age?: number
}

interface IUser extends IPerson {
  email: string
  password: string
}

const john: IUser = {
  email: 'john@example.com',
  password: 'johnpassword',
  name: 'John Malkovich',
  id: 122,
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
}

console.log(john)
// {
//   email: 'john@example.com',
//   password: 'johnpassword',
//   name: 'John Malkovich',
//   id: 122,
//   createdAt: 1723836798029,
//   updatedAt: 1723836798029
// }
