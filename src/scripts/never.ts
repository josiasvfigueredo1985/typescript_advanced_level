// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showError(message: string): never {
  throw new Error(message)
}

// showError('Something went wrong!') // Process will stops and following message is displayed: Error: Something went wrong!

let nlp = 0
function infiniteLoop(): never {
  while (true) {
    console.log(nlp++)
  }
}
// This loop will run undefinetly every time this function is called, this could be a function to always check some condition that
// is happening untill another command is executed to stop it, like a light sensor for example
infiniteLoop()
