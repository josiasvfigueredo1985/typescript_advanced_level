type TpAnimal = {
  name: string
  bread: string
  sounds: string
  isDomestic: boolean
}

class Cat implements TpAnimal {
  name: string
  bread: string
  sounds: string
  isDomestic: boolean

  constructor(
    name: string,
    bread: string,
    sounds: string,
    isDomestic: boolean
  ) {
    this.name = name
    this.bread = bread
    this.sounds = sounds
    this.isDomestic = isDomestic
  }

  makeSound(): string {
    return this.sounds
  }

  isPet(): boolean {
    return this.isDomestic
  }
}

const cat = new Cat('Whiskers', 'Persian', 'Meow', true)
console.log(cat)
