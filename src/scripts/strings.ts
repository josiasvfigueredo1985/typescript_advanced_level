// const company = "Google Inc"
// company = "Amazon" // Does not work
interface Company {
    name: string
}

class Company implements Company {}

let COMPANYdata: string
COMPANYdata = 'Microsoft Corporation'
console.log(COMPANYdata) //;

COMPANYdata = 'Googl' // Does work
console.log(`Company is: ${COMPANYdata}`)
console.log('Tesdts')
