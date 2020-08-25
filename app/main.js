import VendingController from "./Controllers/vendingController.js";

class App {
  vendingController = new VendingController();
}

window["app"] = new App();
