import ModelStats from "./model-stats.js";
import ViewStats from "./view-stats.js";

export default class ControllerStats{
    constructor( { notify } ) {
        this.model = new ModelStats()
        this.view = new ViewStats(this.onSearch)

        this.init()

        this.notify = notify;
    }

    init = () => {
         this.model.loadStats()
            .then(d => {
                this.view.render(d);
                this.notify('LOADED_DATA', d);
            })
    }


    onSearch = ev   => {
        const stats = this.model.search(ev.target.value)
        this.view.render(stats)
    }
}