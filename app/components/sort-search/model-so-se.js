export default class ModelSoSe{
    goods = []

    search = text => {
        const textL = text.toLowerCase().trim()
        return this.goods.filter(({name}) => name.toLowerCase().includes(textL))
    }

    sort = type => {
        const sortMethods = {
            'low-price' : (a, b) => a.price - b.price,
            'high-price': (a, b) => b.price - a.price,
        }

        this.goods.sort(sortMethods[type])

        return this.goods
    }

    filtering = type => {
        if (type === 'All'){
            return this.goods;
        }else{
            return this.goods.filter(st => st.category === type)
        }
    }
}