import ViewSoSe from "./view-so-se.js";
import ModelSoSe from "./model-so-se.js";

export default class ControllerSoSe{
    constructor({ subscribe, notify, events }) {

        this.view = new ViewSoSe(this.onSort, this.onSearch, this.onFilter, this.onCart, this.onOrders)
        this.model = new ModelSoSe()

        subscribe(events.LOADED_DATA, this.onLoad)

        this.notify = notify
        this.events = events

    }

    onLoad = data => {
        this.model.goods = data;
    }

    onSearch = ev => {
        const goods = this.model.search(ev.target.value)
        this.notify(this.events.AFTER_SEARCH, goods)
    }

    onSort = ev => {
        const goods = this.model.sort(ev.target.value)
        this.notify(this.events.AFTER_SORT, goods)
    }

    onFilter = ev => {
        const goods = this.model.filtering(ev.target.value)
        this.notify(this.events.AFTER_FILTER, goods)
    }

    onCart = _ => {
        this.notify(this.events.REND_CART)
    }

    onOrders = _ => {
        this.notify(this.events.REND_HISTORY)
    }
}