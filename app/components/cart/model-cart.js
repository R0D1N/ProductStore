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
        console.log(this.rendArray)
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

    getForm = (ev, sum) => {
        ev.preventDefault();

        const fields = document.querySelectorAll('input, select, textarea');
        const values = {};
        fields.forEach(fl =>{
            const {name, value} = fl;
            values[name] = value;
        })

        const result = this.validation(values)

        if (result === 1){
            console.log(this.array);

            let time = new Date()
            time.toDateString();
            let UTCstring = time.toUTCString();
            values.date = UTCstring
            values.order = this.rendArray;
            values.sum = sum;
            this.rendArray = [];
            this.array = [];
            this.unqList.clear();
            localStorage.setItem('cart', `[]`);
            localStorage.setItem('rendCart', `[]`);
            return values;
        }else{
            return result;
        }
    }

    validation = ( { name, LName, city, email, phone } ) =>{

        const result = {}

        result.name = this.validHelp(name, 'Name');
        result.LName = this.validHelp(LName, 'Surname');
        result.city = this.validHelp(city, 'City');
        result.email = this.validHelp(email, 'Email');
        result.phone = this.validHelp(phone, 'Phone')

        if (!(Object.values(result).find((el) => typeof el !== 'boolean'))) {
            return 1;
        }

        return result;
    }

    validHelp = (data, type) => {
        const reg = {
            Email: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
            Name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
            Surname: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
            Phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            City: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        };

        let result = `${type} is not valid`;

        if (reg[type].test(data)) {
            result = true;
        }

        return result;
    }




    makeOrderHs = info =>{
        this.history.push(info);
        localStorage.removeItem('history');
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    getBotStat = data =>{

        const { name, LName, email, city, date, phone } = data;

        return encodeURI(`Name: ${name}
        Surname: ${LName}
        Email: ${email}  
        Phone: ${phone}              
        City: ${city}
        Date: ${date}
        `.replace(/\./g, ','));
    }
}