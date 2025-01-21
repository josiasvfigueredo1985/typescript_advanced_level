/* eslint-disable no-new */
import Operations from './operations.js'
import Display from './display.js'
import DateTime from './dateTime.js'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class CalculatorControl {
  constructor(
    private readonly display = new Display(),
    private readonly ops = new Operations()
  ) {
    new DateTime()
    this.display.content = '123.456'
    this.buttonsEvent()
  }

  buttonsEvent(): void {
    document.querySelectorAll('#teclado button').forEach((button) => {
      button.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLButtonElement
        switch (target.id) {
          case 'zero':
          case 'um':
          case 'dois':
          case 'tres':
          case 'quatro':
          case 'cinco':
          case 'seis':
          case 'sete':
          case 'oito':
          case 'nove':
            this.addNumber(Number(target.dataset.valor))
            break

          case 'adicao':
          case 'subtracao':
          case 'multiplicacao':
          case 'divisao':
            this.addOperator(target.dataset.valor ?? '')
            break
          case 'ponto':
            break
          case 'igual':
            break
          case 'limpar':
            break
          case 'desfazer':
            break
          case 'porcentagem':
            break
        }
      })
    })
  }

  addOps(value: string): void {
    this.ops.add(value)
  }

  addNumber(value: number): void {
    this.display.content = value.toString()

    this.addOps(value.toString())
  }

  addOperator(operator: string): void {
    this.addOps(operator)
  }
}
