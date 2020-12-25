import ModelStats from "./model-stats";
import ViewStats from "./view-stats";

export default class ControllerStats{
    constructor() {
        this.model = new ModelStats()
        this.view = new ViewStats()

        this.init()
    }

    init = () => {
        this.model.loadStats()
            .then(d => {
                this.view.render(d)
            })
    }
}