/* eslint-disable @typescript-eslint/no-magic-numbers */
class PermissionClass {
  constructor(
    private _name: string, // Using underscore to allow to use same name on getter and setter
    private _level: number
  ) {}

  get name(): string {
    return this._name.toLocaleUpperCase()
  }

  set name(value: string) {
    if (value.length < 5) {
      throw new Error('Permission name must be at least 5 characters')
    } else {
      this._name = value
    }
  }

  get level(): number {
    return this._level
  }

  set level(value: number) {
    this._level = value
  }
}

const permission1 = new PermissionClass('administrator', 1)
console.log(permission1.name)
permission1.name = 'admin'
console.log(permission1.name)
try {
  permission1.name = 'adm'
} catch (e) {
  console.log((e as Error).message)
}
console.log(permission1.name) // Error
