import ViewCardDetails from "./view-card-details.js";

export default class ControllerCardDetails{
    constructor( { subscribe, events }) {

        this.view = new ViewCardDetails()

        subscribe(events.REND_DETAILS, this.onDetails)

    }

    onDetails = data => {
        this.view.render(data);
    }
}