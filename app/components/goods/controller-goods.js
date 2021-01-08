import ModelGoods from "./model-goods.js";
import ViewGoods from "./view-goods.js";

export default class ControllerGoods {
    constructor( {  notify, events, subscribe } ) {
        this.model = new ModelGoods()
        this.view = new ViewGoods(this.onDetails, this.onCart)

        this.init()

        this.notify = notify;
        this.events = events;

        subscribe(events.AFTER_FILTER, this.onSoSe)
        subscribe(events.AFTER_SEARCH, this.onSoSe)
        subscribe(events.AFTER_SORT, this.onSoSe)
    }

    onSoSe = data => {
        this.view.render(data)
    }

    init = () => {
         this.model.loadStats()
            .then(d => {
                this.view.render(d);
                this.notify(this.events.LOADED_DATA, d);
            })
    }

    onDetails = ev =>{
        const goods = this.model.getRecordById(ev.target.dataset.detailsId)
        this.notify(this.events.REND_DETAILS,  goods)
    }

    onCart = ev =>{
        const goods = this.model.getRecordById(ev.target.dataset.cartId)
        this.notify(this.events.CART_CLICK, goods)
    }
}