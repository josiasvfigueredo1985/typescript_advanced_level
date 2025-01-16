/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace Authentication {
  interface IUser {
    username: string
    password: string
    email: string
    phoneNumber: string
    address: string
  }

  interface IRegister {
    username: string
    password: string
    email: string
    phoneNumber: string
    address: string
    birthdate: string
  }

  export class LoginRegister {
    login(user: IUser): IUser {
      return user
    }

    register(newUser: IRegister): IRegister {
      return newUser
    }
  }
  export class RecoverRegister {
    recoverPassword(): void {
      console.log('recover password in progress')
    }

    recoverUser(): void {
      console.log('recover user in progress')
    }
  }
}
