export default class ModelCart {

    array = [];
    unqList = new Set();
    rendArray = [];



    constructor() {
        this.array = JSON.parse(localStorage.getItem('cart')??'[]');
        this.rendArray = JSON.parse(localStorage.getItem('rendCart')??'[]');
    }

    summary = _ => {
        const sum = this.array.reduce((acc, { price }) => {
            acc += +price;
            return acc;
        }, 0);
        return sum;
    }


    addToCart = data => {
        this.array.push(data);
        this.unqList.add(data);
        this.rendArray = [];
        this.unqList.forEach(el => {
            const count  = this.array.reduce((c, data) => data === el ? ++c : c, 0)
            this.rendArray.push({
                count,
                ...el
            })
        })
        localStorage.setItem('rendCart', JSON.stringify(this.rendArray));
        localStorage.setItem('cart', JSON.stringify(this.array));
    }
}