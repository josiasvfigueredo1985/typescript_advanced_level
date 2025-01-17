function decoratorAttribute(target: unknown, propertyName: string): void {
  let value: string

  Object.defineProperty(target, propertyName, {
    get() {
      return value.toUpperCase()
    },
    set(newValue: string) {
      value = newValue
    },
    enumerable: true,
    configurable: true,
  })
}

class Animal {
  @decoratorAttribute
  name: string

  constructor(name: string) {
    this.name = name // O setter do decorator será chamado aqui
  }
}

const newDog = new Animal('Pluto')
console.log(newDog.name) // Agora deve imprimir "PLUTO"
