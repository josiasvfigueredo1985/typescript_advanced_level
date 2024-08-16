// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-confusing-void-expression, @typescript-eslint/no-invalid-void-type
const myConsole: void = console.log('Hello world!') // Hello world!
// Return assignment is the same as console.log, and that's why this function can be executed

console.log(myConsole) // undefined

function showPhrase(): void {
  const phrase = 'Learning TypeScript'
  console.log(phrase)
  // return phrase // Type 'string' is not assignable to type 'void'.
  // eslint-disable-next-line no-useless-return
  return // Works
}

showPhrase() // Learning TypeScript

// Another example of uses of void

function createConfigFile(): void {
  /** @Explanation */
  /**
   * This could be a function tha just create a file, without need to return anything, so the return must be set as void
   */
  // code goes here
  console.log('File created!')
}
createConfigFile() // File created!
