/* eslint-disable @typescript-eslint/no-use-before-define */
// Interface with optionals parameters
interface IProducts {
  productName: string
  price: number
  productType: string
  productId: string
  productDescription?: string
  isPerishable: boolean
  productValidateDate: {
    validFrom: Date
    validUntil?: Date
  }
}

const newProduct: IProducts = {
  productName: 'Laptop Dell Deluxe Edition',
  price: 990,
  productType: 'Electronic',
  productId: '0TGT52Y0YGHGYH',
  isPerishable: false,
  productValidateDate: {
    validFrom: new Date(),
  },
}
console.log(newProduct)

const newPerishableProduct: IProducts = {
  productName: 'Laptop Dell Deluxe Edition',
  price: 990,
  productType: 'Electronic',
  productId: '0TGT52Y0YGHGYH',
  isPerishable: true,
  productValidateDate: {
    validFrom: new Date(),
  },
}
console.log(checkProductValidity(newPerishableProduct))
// {
//   productName: 'Laptop Dell Deluxe Edition',
//   price: 990,
//   productType: 'Electronic',
//   productId: '0TGT52Y0YGHGYH',
//   productValidateDate: {
//     isPerishable: true,
//     validFrom: 2024-08-16T14:03:09.472Z // Current data,
//     validTo: 2025-08-16T14:03:09.472Z // Current data = 1 year ahead
//   }
// }
function checkProductValidity(product: IProducts): IProducts {
  const validity = new Date()
  return product.isPerishable
    ? {
        ...product,
        productValidateDate: {
          validFrom: validity,
          validUntil: new Date(
            validity.setFullYear(validity.getFullYear() + 1)
          ),
        },
      }
    : product
}
