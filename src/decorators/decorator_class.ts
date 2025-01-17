/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { addDebug, log } from './utils/decorators_functions'

@addDebug
class FirstClass {
  constructor() {}
}

@log
class SecondClass {
  constructor() {}
}

console.log(new SecondClass())
