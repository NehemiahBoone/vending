import STORE from "../store.js"
let currency = STORE.State.currency

//Public
class VendingService {
  constructor() {
    console.log("Creating Vending Service", STORE)
  }

  insertQuarter() {
    currency += 0.25

    document.getElementById('currency').innerHTML = `
    <h2>$${currency.toFixed(2)}</h2>
    `
  }

  buy(name) {
    let item = STORE.State.items.find(i => i.snack == name)
    if (name == 'Mountain Dew' && currency >= item.price) {
      currency -= item.price
      document.getElementById('currency').innerHTML = `
      <h2>$${currency.toFixed(2)}</h2>
      `
      console.log('Mountain Dew')
    }
    else if (name == 'Chips' && currency >= item.price) {
      currency -= item.price
      document.getElementById('currency').innerHTML = `
      <h2>$${currency.toFixed(2)}</h2>
      `
      console.log('Chips')
    }
  }
}

const SERVICE = new VendingService();
export default SERVICE;