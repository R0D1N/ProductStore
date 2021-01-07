import ControllerGoods from "./components/goods/controller-goods.js";
import Publisher from "./helpers/publisher.js";
import ControllerCardDetails from "./components/card-details/controller-card-details.js";
import ControllerSoSe from "./components/sort-search/controller-so-se.js";

const publisher = new Publisher()
const sortSearch = new ControllerSoSe(publisher.methods)
const stat = new ControllerGoods(publisher.methods)
const details = new ControllerCardDetails(publisher.methods)

