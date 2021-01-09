import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart{

    constructor({ subscribe, events }) {

        this.model = new ModelCart();
        this.view = new ViewCart(this.onDel, this.onPlus, this.onBuy);
        //this.view = new ViewCart(this.onDel);

        subscribe(events.CART_CD_CLICK, this.onCartCard);
        subscribe(events.REND_CART, this.onRender);
    }

    onCartCard = data =>{
        this.model.addToCart(data);
        //alert( data.name )
    }

    onRender = _ =>{
        const sum = this.model.summary();
        this.view.render(this.model.rendArray, sum);
    }

    onPlus = ev => {
        const goods = this.model.getRecordByIdAr(ev.target.dataset.addId);
        this.model.addToCart(goods);
        const sum = this.model.summary();
        this.view.render(this.model.rendArray, sum)
    }

    onDel = ev => {
        const goods = this.model.getRecordById(ev.target.dataset.delId);
        this.model.delete_good(goods);
        const sum = this.model.summary();
        this.view.render(this.model.rendArray, sum);
    }

    onBuy = _ =>{
        this.view.renderForm();
    }
}