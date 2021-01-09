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
        console.log(data)
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

    getRecordById = id => {
        return this.rendArray.find(gd => gd.id === id)
    }

    getRecordByIdAr = id => {
        return this.array.find(gd => gd.id === id)
    }

    delete_good = good =>{

        const arId = this.rendArray.indexOf(good);
        this.rendArray.splice(arId, 1);

        this.unqList.forEach(el => {
            if (el.id === good.id){
                this.unqList.delete(el);
            }
        })

        localStorage.setItem('rendCart', JSON.stringify(this.rendArray))
        this.delete_in_array(good);

    }

    delete_in_array = good => {
        let arId = this.array.findIndex(gd => gd.id === good.id);
        if (arId === -1){
            localStorage.setItem('cart', JSON.stringify(this.array));
            return
        }
        this.array.splice(arId, 1)
        this.delete_in_array(good);
    }
}