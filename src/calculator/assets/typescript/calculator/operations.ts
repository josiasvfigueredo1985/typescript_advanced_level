export default class Operations {
  constructor(private readonly ops: string[] = []) {
    // ['122', +, '44']
  }

  add(value: string): number {
    this.ops.push(value)

    console.log(this.ops)

    return this.length
  }

  get length(): number {
    return this.ops.length
  }
}
