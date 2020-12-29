import ModelStats from "./model-stats.js";
import ViewStats from "./view-stats.js";

export default class ControllerStats{
    constructor() {
        this.model = new ModelStats()
        this.view = new ViewStats(this.onSearch)

        this.init()
    }

    init = () => {
         this.model.loadStats()
            .then(d => {
                this.view.render(d)
            })
    }


    onSearch = ev   => {
        const stats = this.model.search(ev.target.value)
        this.view.render(stats)
    }
}