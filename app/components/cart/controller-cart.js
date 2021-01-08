import ModelCart from "./model-cart.js";

export default class ControllerCart{

    constructor({ subscribe, events }) {

        this.model = new ModelCart()

        subscribe(events.CART_CD_CLICK, this.onCartCard)
    }

    onCartCard = data =>{
        this.model.addToCart(data)
    }
}