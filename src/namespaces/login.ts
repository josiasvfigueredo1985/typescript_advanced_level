/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./authentication/authentication.ts" /> // Deprecated reference
// import is the right way from ECMA 15
import { Authentication } from './authentication/authentication'

const registerNewUser = new Authentication.LoginRegister()
const resultNewRegister = registerNewUser.register({
  username: 'newuser123',
  password: 'newuser123',
  email: 'newuser123@example.com',
  phoneNumber: '+555-12345678',
  address: '123 Main St',
  birthdate: '1990-01-01',
})

console.log(resultNewRegister)
