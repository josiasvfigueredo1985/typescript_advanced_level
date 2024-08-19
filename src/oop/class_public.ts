// Public access modifier
class Vehicle {
  public color: string

  constructor(color: string) {
    this.color = color
  }

  public tryOpenDoor(): boolean {
    return false
  }
}

const car = new Vehicle('Blue')
console.log(car) // Vehicle { color: 'Blue' }
car.color = 'Green'
console.log(car) // Vehicle { color: 'Green' }
console.log(car.tryOpenDoor()) // false
