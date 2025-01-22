/* eslint-disable no-new */
import Operations from './operations.js'
import Display from './display.js'
import DateTime from './dateTime.js'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class CalculatorControl {
  constructor(
    private readonly display = new Display(),
    private readonly ops = new Operations({
      onCalculation: (result: string) => {
        this.display.content = result
      },
    })
  ) {
    new DateTime()
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
          case 'limpar':
            this.ops.clear()
            this.display.content = '0'
            break
          case 'desfazer':
            break
          case 'porcentagem':
            break

          case 'igual':
            this.calculate()
            break
        }
      })
    })
  }

  calculate(): void {
    this.ops.calculate()
  }

  addOps(value: string): void {
    this.ops.add(value)
  }

  addNumber(value: number): void {
    if (isNaN(Number(this.ops.lastPosition))) {
      this.addOps(value.toString())
    } else {
      value = Number(this.ops.lastPosition.toString() + value.toString())
      this.ops.lastPosition = value.toString()
    }

    this.display.content = value.toString()
  }

  addOperator(operator: string): void {
    if (isNaN(Number(this.ops.lastPosition))) {
      this.ops.lastPosition = operator
    } else {
      if (this.ops.length === 0) {
        this.addOps('0')
      }
      this.addOps(operator)
    }
  }
}
