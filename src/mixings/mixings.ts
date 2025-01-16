/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import applyMixins from './applyingMixins'

/* eslint-disable @typescript-eslint/no-unused-vars */
class FinalProduct {
  sell(quantity: number): string {
    return `\nIt was sold the quantity of ${quantity} products`
  }

  buy(quantity: number): string {
    return `\nIt was bought the quantity of ${quantity} products`
  }
}

class Chair {
  sit(): string {
    return '\nThe person is sitting on the chair'
  }

  move(): string {
    return '\nThe chair is moving'
  }
}

class Couch {
  constructor(public model: string) {}
}
// Interface must have the same name as class, using it will allows intellisense to access class properties
interface Couch extends FinalProduct, Chair {}

// Allows to a class extends multiple classes
applyMixins(Couch, [FinalProduct, Chair])

const couch = new Couch('Sofa')
console.log(couch.sit(), couch.move(), couch.sell(3), couch.buy(2))
