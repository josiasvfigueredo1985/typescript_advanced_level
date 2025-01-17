/* eslint-disable @typescript-eslint/no-magic-numbers */
import { decoratorMethod } from './utils/debug'

class HandleMessage {
  @decoratorMethod
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showMessages(...messages: any[]): any[] {
    return messages
  }
}

const instance = new HandleMessage()
console.log(instance.showMessages({ showMessages: true }))
console.log(instance.showMessages('hello', 'world'))
console.log(instance.showMessages(1, 2, 3))
console.log(instance.showMessages(true))
