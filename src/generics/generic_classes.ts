interface IBaseRegistration {
  name: string
  readonly id: string
  readonly createdAt: Date
  readonly updatedAt: Date
}

interface IRegisterUser extends IBaseRegistration {
  email: string
  password: string
}

interface IRegisterCategory extends IBaseRegistration {
  type: string
}

class BaseRegister<TBaseInterface> {
  create(data: TBaseInterface): void {
    console.log('Creating data', data)
  }

  read(id: number): TBaseInterface {
    console.log('Reading data with id:', id)
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const data: TBaseInterface = {} as TBaseInterface
    return data
  }

  update(id: number, updatedData: TBaseInterface): TBaseInterface {
    console.log('Updating data with id:', id)
    return updatedData
  }

  delete(id: number): boolean {
    console.log('Deleting data with id:', id)
    return true
  }
}
class ModelUser extends BaseRegister<IRegisterUser> {}

const newBaseUser = new ModelUser()
newBaseUser.create({
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  id: '123abc',
  createdAt: new Date(),
  updatedAt: new Date(),
})

newBaseUser.read(1)

class Movie extends BaseRegister<IRegisterCategory> {}

const fiction = new Movie()
fiction.create({
  name: 'Fiction',
  type: 'Category',
  id: '456def',
  createdAt: new Date(),
  updatedAt: new Date(),
})
fiction.read(1)
