import Vending from "./Models/Vending.js"

let _state = {
  items: [new Vending('Mountain Dew', 1.50, 'mtndew'), new Vending('Chips', 1.25, 'chps')],
  currency: 0,
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
