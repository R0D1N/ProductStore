import ModelStats from "./model-stats.js";
import ViewStats from "./view-stats.js";

export default class ControllerStats{
    constructor( {  notify, events } ) {
        this.model = new ModelStats()
        this.view = new ViewStats(this.onSearch, this.onSort)

        this.init()

        this.notify = notify;
        this.events = events;
    }

    init = () => {
         this.model.loadStats()
            .then(d => {
                this.view.render(d);
                this.notify(events.LOADED_DATA, d);
            })
    }

    onSearch = ev => {
        console.log('search')
        const stats = this.model.search(ev.target.value)
        this.view.render(stats)
    }

    onSort = ev => {
        console.log('sort')
        const stats = this.model.sort(ev.target.value)
        this.view.render(stats)
    }

    onFilter = ev => {
        console.log('filter')
        const stats = this.model.filter(ev.targer.value)
        this.view.render(stats)
    }
}