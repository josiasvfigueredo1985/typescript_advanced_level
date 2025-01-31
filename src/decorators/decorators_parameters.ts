/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
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
