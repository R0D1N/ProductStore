import ModelBot from "./model-bot.js";

export default class ControllerBot{
    constructor({ subscribe, events }){
        this.model = new ModelBot();

        subscribe(events.SEND_MESSAGE, this.onSend);
        subscribe(events.LOADED_DATA, this.onAuth);
    }

    onSend = msg => {
        console.log(msg);
        this.model.send(msg);
    }

    onAuth = _ => {
        this.model.initTokens();
    }
}