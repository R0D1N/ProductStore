export default class ModelCart {

    array = [];
    unqList = new Set();
    rendArray = [];
    history = [];

    constructor() {
        this.array = JSON.parse(localStorage.getItem('cart') ?? '[]');
        this.history = JSON.parse(localStorage.getItem('history') ?? '[]');
        this.rendArray = JSON.parse(localStorage.getItem('rendCart') ?? '[]');
    }

    summary = _ => {
        const sum = this.array.reduce((acc, {price}) => {
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
            const count = this.array.reduce((c, data) => data === el ? ++c : c, 0)
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

    delete_good = good => {

        const arId = this.rendArray.indexOf(good);
        this.rendArray.splice(arId, 1);

        this.unqList.forEach(el => {
            if (el.id === good.id) {
                this.unqList.delete(el);
            }
        })

        localStorage.setItem('rendCart', JSON.stringify(this.rendArray))
        this.delete_in_array(good);

    }

    delete_in_array = good => {
        let arId = this.array.findIndex(gd => gd.id === good.id);
        if (arId === -1) {
            localStorage.setItem('cart', JSON.stringify(this.array));
            return
        }
        this.array.splice(arId, 1)
        this.delete_in_array(good);
    }

    getForm = ev => {
        ev.preventDefault();

        const fields = document.querySelectorAll('input, select, textarea');
        const values = {};
        fields.forEach(fl =>{
            const {name, value} = fl;
            values[name] = value;
        })
        values.date = Date.now();
        values.order = this.rendArray;
        this.rendArray = [];
        return values;
    }

    makeOrderHs = info =>{
        this.history.push(info);
        localStorage.removeItem('history');
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    getBotStat = data =>{
        const { name, LName, email, city, date } = data;

        console.log(data);

        return encodeURI(`        
        ${name}
        ${LName}
        ${email}                
        ${city}
        ${date}
        `.replace(/\./g, ','));
    }
}