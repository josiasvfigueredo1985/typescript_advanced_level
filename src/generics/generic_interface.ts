/* eslint-disable @typescript-eslint/no-magic-numbers */
interface IProcessing<TTypeInterface> {
  value: TTypeInterface
  performProcessing: (arg: TTypeInterface) => TTypeInterface
}

const text: IProcessing<string> = {
  value: 'Hello World!',
  performProcessing: (str) => str.toUpperCase(),
}

console.log(text.performProcessing(text.value))

const number: IProcessing<number> = {
  value: 10,
  performProcessing: (num) => num * 2,
}

console.log(number.performProcessing(number.value))
