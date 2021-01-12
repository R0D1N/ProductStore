import ModelCart from "./model-cart.js";
import ViewCart from "./view-cart.js";

export default class ControllerCart{

    constructor({ subscribe, events, notify }) {

        this.model = new ModelCart();
        this.view = new ViewCart(this.onDel, this.onPlus, this.onBuy, this.onGetForm);
        this.notify = notify;
        this.events = events;


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

    //cusInfo = INFO about customer from FORM

    onGetForm = ev =>{
        const sum = this.model.summary();
        this.cusInfo = this.model.getForm(ev, sum);
        if ((Object.values(this.cusInfo).find((el) => typeof el !== 'boolean'))){
            this.view.onError(this.cusInfo);
        }else{

            this.model.makeOrderHs(this.cusInfo);
            this.SendMessage(this.cusInfo);
            this.view.onClose()
        }

    }

    SendMessage = data =>{
        this.botData = this.model.getBotStat(data);
        this.notify(this.events.SEND_MESSAGE, this.botData);
        alert('Thank you for order!');
    }


}