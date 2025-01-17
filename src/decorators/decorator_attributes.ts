import { decoratorAttribute } from './utils/decorators_functions'

class Animal {
  @decoratorAttribute
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const newDog = new Animal('Pluto')
console.log(newDog.name)
