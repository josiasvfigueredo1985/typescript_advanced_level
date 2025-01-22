interface IOperationsOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCalculation: any
}
export default class Operations {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly onCalculation: any

  constructor(
    opts: IOperationsOptions,
    private ops: string[] = []
  ) {
    this.onCalculation = opts.onCalculation
    // ['122', +, '44']
  }

  add(value: string): number {
    const opsLimit = 3
    if (this.ops.length === opsLimit) {
      this.calculate()
    }
    this.ops.push(value)

    console.log(this.ops)

    return this.length
  }

  calculate(): void {
    const displayLimit = 12
    // eslint-disable-next-line prefer-const
    let result = this.getResults()
    if (result.length > displayLimit) {
      result = result.substring(0, displayLimit)
    }
    this.ops = [result]

    this.onCalculation(result)
  }

  getResults(): string {
    let results: string
    try {
      // eslint-disable-next-line no-eval
      results = eval(this.ops.join('')).toString()
    } catch (error) {
      results = 'error'
    }
    return results
  }

  get lastPosition(): string {
    const lastIndex = this.ops.length > 0 ? this.ops[this.ops.length - 1] : '0'
    return lastIndex
  }

  set lastPosition(value: string) {
    const lastIndex = this.ops.length > 0 ? this.ops.length - 1 : 0
    this.ops[lastIndex] = value
  }

  get length(): number {
    return this.ops.length
  }
}
