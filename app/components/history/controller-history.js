import ViewHistory from "./view-history.js";
import ModelCart from "../cart/model-cart.js";

export default class ControllerHistory{

    constructor( {subscribe, events, notify} ) {

        this.view = new ViewHistory();
        this.cartModel = new ModelCart();
        this.events = events;
        this.notify = notify;

        subscribe(events.REND_HISTORY, this.onRender);
    }

    onRender = _ =>{
        this.HSarray = this.cartModel.history;
        this.view.render(this.HSarray);
    }
}