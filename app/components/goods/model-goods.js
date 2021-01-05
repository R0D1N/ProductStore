export default class ModelGoods {
    link = "https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/3/public/full?alt=json"

    goods = []

    names = [
        {
            name: 'id',
            type: 'float'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'manufacture',
            type: 'string'
        },
        {
            name: 'category',
            type: 'string'
        },
        {
            name: 'ingredients',
            type: 'string'
        },
        {
            name: 'amount',
            type: 'float'
        },
        {
            name: 'units',
            type: 'string'
        },
        {
            name: 'price',
            type: 'float'
        },
        {
            name: 'img',
            type: 'string'
        },
    ]

    loadStats = () => {
        return fetch(this.link)
            .then( r => r.json())
            .then(d => {
                this.goods = this.parseData(d.feed.entry)
                this.goods = this.goods.slice(1);
                return this.goods
            })
    }

    parseData = arr => {
        const shift = this.names.length

        return arr.reduce((acc, { content }, i) => {
            const index = Math.floor(i / shift)
            const { name, type } = this.names[i % shift]

            if (!acc[index]){
                acc[index] = {}
            }
            acc[index][name] = content.$t
            return acc
        }, [])
    }

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
        return this.goods.filter(st => st.category === type)
    }

   parseContent = goods => {

       arr.slice(1).map(this.renderCard).join('');

    }
}