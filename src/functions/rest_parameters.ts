/* eslint-disable @typescript-eslint/no-magic-numbers */
// Default implementation of a function without rest parameters
// That way the # of parameters it's static
function sumStudentScore(scr1: number, scr2: number, scr3: number): void {
  console.log(scr1 + scr2 + scr3)
}

sumStudentScore(5, 10, 8) // 23

// With rest parameters, the function can receive dynamic # of parameters
// '...' is called spread operator
function sumStudentScoreWithRest(...scores: number[]): void {
  // 0 is a default value in case only one argument is passed and avoid sum with zero error
  console.log(scores.reduce((total, currentScore) => total + currentScore, 0))
}
// As in this example, now the function can receive a single parameter
sumStudentScoreWithRest(1) // 1
// or multiple parameters
sumStudentScoreWithRest(1, 2, 3, 45, 456, 1234, 124, 12344) // 14209

// Also can be used for strings as well
function concatNamesWithRest(...scores: string[]): void {
  const space = scores.length === 1 ? '' : ' - '
  // In this case there's no need of a default value
  console.log(
    scores.reduce((total, currentScore) => total + space + currentScore)
  )
}

concatNamesWithRest('John') // John
concatNamesWithRest('John', 'Mary', 'Alice', 'Bob') // John - Mary - Alice - Bob
