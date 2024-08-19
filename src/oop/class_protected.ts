class Domicile {
  public color: string
  public address: object

  constructor(color: string, address: object) {
    this.color = color
    this.address = address
  }

  public ringDoorBell(): string {
    return 'Bell is ringing!!!'
  }

  protected answerDomicileDoorbell(answer: string): string {
    return answer
  }
}

class Home extends Domicile {
  // Constructor for child class is not necessary because child class already inherit from parent class
  protected answerHomeDoorbell(answer: string): string {
    return answer
  }

  public enterHome(): string {
    return this.answerHomeDoorbell('Hello, who`s this?')
  }

  // Protected methods can be accessed by child classes
  public enterDomicile(): string {
    return this.answerDomicileDoorbell('Hello, name please?')
  }
}

const homerHome = new Home('Yellow', {
  street: 'Baker',
  number: 100,
  city: 'Alabama',
  country: 'United States',
})

console.log(homerHome)
console.log(homerHome.ringDoorBell())
console.log(homerHome.enterHome())
console.log(homerHome.enterDomicile())
