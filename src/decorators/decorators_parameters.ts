/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import 'reflect-metadata'
/* eslint-disable @typescript-eslint/explicit-function-return-type */
function decoratorParameters(target: any, key: string, propertyKey: number) {
  return Reflect.getMetadata('design:paramtypes', target, key).map((item) => {
    console.log(item)
  })
}

class HandleParameters {
  methodOne(@decoratorParameters message: string) {}

  methodTwo(@decoratorParameters number: number) {}
}

// eslint-disable-next-line no-new
new HandleParameters()
