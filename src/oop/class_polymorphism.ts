/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-extraneous-class */

// Simple Polymorphism example
class Company {
  static providingService(): string {
    return 'Performing Service...'
  }
}

class Bakery extends Company {
  static providingService(): string {
    return 'Selling breads...'
  }
}

class RepairShop extends Company {
  static providingService(): string {
    return 'Repairing vehicles...'
  }
}

console.log(Company.providingService()) // 'Performing Service...'
console.log(Bakery.providingService()) // 'Selling breads...'
console.log(RepairShop.providingService()) // 'Repairing vehicles...'

console.log('-'.repeat(90))
console.log('With SOLID(Open/Close and Liskov Substitution principles)')
console.log('-'.repeat(90))

class Company2 {
  protected static service = 'Performing Service...'

  static providingService(): string {
    return this.service
  }
}

class Bakery2 extends Company2 {
  protected static service = 'Selling breads...'
}

class RepairShop2 extends Company2 {
  protected static service = 'Repairing vehicles...'
}

console.log(Company2.providingService()) // 'Performing Service...'
console.log(Bakery2.providingService()) // 'Selling breads...'
console.log(RepairShop2.providingService()) // 'Repairing vehicles...'
