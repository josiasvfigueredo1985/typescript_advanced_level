/* eslint-disable @typescript-eslint/no-magic-numbers */
class Bank {
  private vaultMoneyQty = 10000

  private withDrawFromVault(moneyQty: number): number | string {
    if (this.vaultMoneyQty >= moneyQty) {
      this.vaultMoneyQty -= moneyQty
      return this.vaultMoneyQty
    } else {
      return 'Required amount not available!'
    }
  }

  protected withDrawFromCashier(moneyQty: number): number | string {
    return this.withDrawFromVault(moneyQty)
  }

  public withDrawFromATM(moneyQty: number): number | string {
    return this.withDrawFromCashier(moneyQty)
  }
}

const bankOfAmerica = new Bank()
console.log(bankOfAmerica.withDrawFromATM(10001)) // Required amount not available!

class Bank24Hs extends Bank {
  // Only protected and public methods are visible to the child class
  withDrawl(moneyQty: number): number | string {
    return this.withDrawFromCashier(moneyQty)
  }
}

const myBank = new Bank24Hs()
console.log(myBank.withDrawl(1000)) // 9000
