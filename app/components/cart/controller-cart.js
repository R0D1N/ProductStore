import ModelCart from "./model-cart.js";

export default class ControllerCart{

    array = [];

    constructor({ subscribe, events }) {

        this.model = new ModelCart()

        subscribe(events.CART_CLICK, this.onCart)
    }

    onCart = data =>{
        this.model.addToCart(data, this.array)
    }
}
