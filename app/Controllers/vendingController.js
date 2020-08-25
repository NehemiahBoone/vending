import VendingService from "../Services/vendingService.js"
import STORE from "../store.js"

//PRIVATE
function _drawItems() {
  let items = STORE.State.items
  let template = ""
  items.forEach(i => {
    template += i.Template
  })
  document.getElementById('vend').innerHTML = template
}

//Public
export default class VendingController {
  constructor() {
    _drawItems()
  }

  insertQuarter() {
    VendingService.insertQuarter()
  }

  buy(item) {
    VendingService.buy(item)
  }
}
