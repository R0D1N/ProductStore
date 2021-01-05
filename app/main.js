import ControllerGoods from "./components/goods/controller-goods.js";
import Publisher from "./helpers/publisher.js";

const publisher = new Publisher()
const stat = new ControllerGoods(publisher.methods)