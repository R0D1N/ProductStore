import Publisher from "./helpers/publisher.js";
import Singletone from "./helpers/singletone-pattern.js";
import ControllerGoods from "./components/goods/controller-goods.js";
import ControllerCardDetails from "./components/card-details/controller-card-details.js";
import ControllerSoSe from "./components/sort-search/controller-so-se.js";
import ControllerCart from "./components/cart/controller-cart.js";
import ControllerBot from "./components/telegram_bot/controller-bot.js";
import ControllerHistory from "./components/history/controller-history.js";

const publisher  = new Publisher();
const { getInstance: getControllerInstance } = Singletone(ControllerCart, publisher.methods)
const cart       = getControllerInstance();
const sortSearch = new ControllerSoSe(publisher.methods);
const tgBot      = new ControllerBot(publisher.methods);
const goods      = new ControllerGoods(publisher.methods);
const details    = new ControllerCardDetails(publisher.methods);
const history    = new ControllerHistory(publisher.methods);




//const cart       = new ControllerCart(publisher.methods);