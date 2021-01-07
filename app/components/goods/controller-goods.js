import ModelGoods from "./model-goods.js";
import ViewGoods from "./view-goods.js";

export default class ControllerGoods {
    constructor( {  notify, events } ) {
        this.model = new ModelGoods()
        this.view = new ViewGoods(this.onSearch, this.onSort, this.onFilter, this.onDetails)

        this.init()

        this.notify = notify;
        this.events = events;
    }

    init = () => {
         this.model.loadStats()
            .then(d => {
                this.view.render(d);
                this.notify(this.events.LOADED_DATA, d);
            })
    }

    onSearch = ev => {
        console.log('search')
        const goods = this.model.search(ev.target.value)
        this.view.render(goods)
    }

    onSort = ev => {
        console.log('sort')
        const goods = this.model.sort(ev.target.value)
        this.view.render(goods)
    }

    onFilter = ev => {
        console.log('filter')
        const goods = this.model.filtering(ev.target.value)
        console.log(goods)
        this.view.render(goods)
    }

    onDetails = ev =>{
        const goods = this.model.getRecordById(ev.target.dataset.detailsId)
        this.notify(this.events.REND_DETAILS,  goods)
    }
}