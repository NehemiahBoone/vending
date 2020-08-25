export default class Vending {
  /**
   * 
   * @param {String} snack 
   * @param {Number} price 
   * @param {String} id 
   */
  constructor(snack, price, id) {
    this.snack = snack
    this.price = price
    this.id = id
  }

  get Template() {
    return `
    <div class="col-3 mt-5 ml-2">
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.snack}</li><button onClick="app.vendingController.buy('${this.snack}')">BUY:
            $${this.price.toFixed(2)}</button>
          </li>
        </ul>
      </div>
    </div>
    `
  }
}