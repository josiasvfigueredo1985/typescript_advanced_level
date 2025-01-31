/* eslint-disable @typescript-eslint/no-magic-numbers */
class Documents {
  private readonly value: string = '123cjkh4f564958ui4hui' // TS
  readonly #number: number = 35 // ECMA format for private

  showDoc(): number {
    return this.#number
  }
}

class CNPJ extends Documents {
  // private readonly value: string = '554548155ffvf54'
  //     Class 'CNPJ' incorrectly extends base class 'Documents'.
  //   Types have separate declarations of a private property 'value'
  readonly #number: number = 355 // ECMA allow to overwrite parent class attributes

  showCNPJ(): number {
    return this.#number
  }
}
const rg = new Documents()
console.log(rg.showDoc())
// Despite value is a private property, if the option Debug anyway is selected, it will be accessible and will be displayd on terminal
// console.log(rg.value)// Property 'value' is private and only accessible within class 'Documents'.

// For ECMA the behavior is different, in this case if Debug anyway is selected, following error will break on debug
// Error: Module parse failed: Private field '#number' must be declared in an enclosing class
// console.log(rg.#number) // Property '#number' is not accessible outside class 'Documents' because it has a private identifier.

const cnpj = new CNPJ()
console.log(cnpj.showCNPJ())
