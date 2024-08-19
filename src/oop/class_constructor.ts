/* eslint-disable @typescript-eslint/no-magic-numbers */
class OrderNormalConstructor {
  product: string
  totalPrice: number
  deliveryDate: Date

  constructor(product: string, totalPrice: number, deliveryDate: Date) {
    this.product = product
    this.totalPrice = totalPrice
    this.deliveryDate = deliveryDate
  }
}

const myOrder = new OrderNormalConstructor('TV', 1200, new Date(2024 - 12 - 1))
console.log(myOrder)

class OrderSimplifiedConstructor {
  constructor(
    private readonly product: string,
    protected totalPrice: number,
    public deliveryDate: Date
  ) {}
}

const myNewOrder = new OrderSimplifiedConstructor(
  'TV',
  1200,
  new Date(2024 - 12 - 1)
)
console.log(myNewOrder)
