import ControllerGoods from "./components/goods/controller-goods.js";
import Publisher from "./helpers/publisher.js";
import ControllerCardDetails from "./components/card-details/controller-card-details.js";

const publisher = new Publisher()
const stat = new ControllerGoods(publisher.methods)
const details = new ControllerCardDetails(publisher.methods)