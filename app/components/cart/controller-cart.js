import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart{

    constructor({ subscribe, events }) {

        this.model = new ModelCart();
        this.view = new ViewCart();

        subscribe(events.CART_CD_CLICK, this.onCartCard);
        subscribe(events.REND_CART, this.onRender);
    }

    onCartCard = data =>{
        this.model.addToCart(data);
    }

    onRender = _ =>{
        const sum = this.model.summary();
        this.view.render(this.model.rendArray, sum);
    }
}