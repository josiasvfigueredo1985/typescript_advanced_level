/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */
const moviesCategory: string[] = [
  'Documentary',
  'Adventure',
  'Comedy',
  'Romance',
  //   true, // error
]

// eslint-disable-next-line @typescript-eslint/array-type
const moviesCategoryYear: (string | number)[] = [
  'Documentary',
  2000,
  'Adventure',
  2005,
  'Comedy',
  'Romance',
  //   true, // error
]
moviesCategory.push('Old Movies')
// moviesCategory.push(1) // error

// eslint-disable-next-line @typescript-eslint/array-type
const moviesbyYear: Array<number> = [2000, 2001, 2020]

const moviesCategoryByYear: Array<string | number> = [
  'Comedy',
  2000,
  'Action',
  2001,
  'Blockbuster',
  2020,
]

moviesCategoryByYear.push('Drama', 2000)
console.log(moviesCategoryByYear) // [ 'Comedy', 2000, 'Action', 2001, 'Blockbuster', 2020, 'Drama', 2000 ]
console.log(moviesCategoryByYear.pop()) // 2000
console.log(moviesCategoryByYear) // [ 'Comedy', 2000, 'Action', 2001, 'Blockbuster', 2020, 'Drama' ]
console.log(moviesCategoryByYear.shift()) // Comedy
console.log(moviesCategoryByYear) // [ 2000, 'Action', 2001, 'Blockbuster', 2020, 'Drama' ]
