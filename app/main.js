import ControllerStats from "./components/stats/controller-stats.js";
import Publisher from "./helpers/publisher.js";

const publisher = new Publisher()
const stat = new ControllerStats(publisher.methods)