export default class ModelCart {

    array = [];
    constructor() {
        this.array = JSON.parse(localStorage.getItem('cart')??'[]');
    }

    addToCart = data => {
        this.array.push(data);
        localStorage.setItem('cart', JSON.stringify(this.array));
    }
}