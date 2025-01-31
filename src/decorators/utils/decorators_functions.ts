/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function addDebug(classes: unknown): void {
  console.log('Class were created')
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export function log(constructor: any) {
  return class extends constructor {
    created_at: Date = new Date('2025-10-01')
  }
}

export function decoratorMethod(
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptor.value = function (...args: any[]) {
    return args.map((item) => {
      if (typeof item === 'string') {
        return item.toString().toUpperCase()
      } else if (typeof item === 'object') {
        return { ...item, createdAt: new Date() }
      } else if (typeof item === 'number') {
        return item + 1
      } else {
        return 'undefined type'
      }
    })
  }
}

export function decoratorAttribute(target: unknown, propertyName: string) {
  let value: string

  Object.defineProperty(target, propertyName, {
    get() {
      return value.toUpperCase()
    },
    set(newValue: string) {
      value = newValue
    },
    enumerable: true,
    configurable: true,
  })
}

export function decoratorGetSet(value: boolean) {
  return function (
    target: unknown,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}
