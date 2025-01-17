import { decoratorGetSet } from './utils/decorators_functions'

class Login {
  constructor(
    private readonly _user: string,
    private readonly _pwd: string
  ) {}

  @decoratorGetSet(true)
  get user(): string {
    return this._user
  }

  @decoratorGetSet(false)
  get pwd(): string {
    return this._pwd
  }
}

const login = new Login('jimmy_1984@gmail.com', 'king1234')
console.log(login)

for (const key in login) {
  console.log('key: ' + key)
  console.log(key, login[key])
}
