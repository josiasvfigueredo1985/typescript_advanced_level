/* eslint-disable @typescript-eslint/no-magic-numbers */

// Abstract class to define specific property
abstract class CarFactoryInfo {
  constructor(
    public year: number,
    public chassisNumber: string
  ) {}
}

// Interface to define common properties
interface ICarInfo extends CarFactoryInfo {
  model: string
  color: string
}

// Extending class to access all properties from interface and abstract class
class CarInfo extends CarFactoryInfo {
  constructor(
    public model: string,
    public color: string,
    public year: number,
    public chassisNumber: string
  ) {
    super(year, chassisNumber)
  }
}

interface ICar {
  info: CarInfo
  start: () => string
  getCarAge: () => string
  getCarInfo: () => string
}

class Nissan implements ICar {
  private readonly year = 2001
  private readonly carAge = new Date().getFullYear() - this.year
  private readonly model = 'Nissan Versa 1.0'
  private readonly color = 'Nissan Stone Gray'
  private readonly chassis = '01AB6565965GH548482021'
  info: ICarInfo = {
    model: this.model,
    color: this.color,
    year: this.year,
    chassisNumber: this.chassis,
  }

  start(): string {
    return `${this.info.model} is started!`
  }

  getCarAge(): string {
    return `This car model ${this.info.model} is ${this.carAge} years old.`
  }

  getCarInfo(): string {
    return `${JSON.stringify(this.info)}`
  }

  static getNissanStart(): void {
    console.log(new Nissan().start())
  }

  static getNissanInfo(): void {
    console.log(new Nissan().info)
  }

  static getNissanAge(): void {
    console.log(new Nissan().getCarAge())
  }

  static getNissanFullInfo(): void {
    console.log(new Nissan().getCarInfo())
  }
}

const vhc = new Nissan()
console.log(`Using class instance \n`, '*'.repeat(90))
console.log(vhc.info)
console.log(vhc.getCarAge())
console.log(vhc.getCarInfo())
console.log(vhc.start())
console.log(`\nUsing static calling \n`, '*'.repeat(90))
Nissan.getNissanStart()
Nissan.getNissanAge()
Nissan.getNissanInfo()
Nissan.getNissanFullInfo()
