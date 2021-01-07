export default class ModelGoods {
    link = "https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json"

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
                this.goods = this.goods.slice(1)
                return this.goods
            })
    }

    parseData = arr => {
        const shift = this.names.length

        return arr.reduce((acc, { content }, i) => {
            const index = Math.floor(i / shift)
            const { name } = this.names[i % shift]

            if (!acc[index]){
                acc[index] = {}
            }
            acc[index][name] = content.$t

            acc[index][name] = this.parseContent(content.$t, name);

            return acc
        }, [])
    }


   parseContent = (content, name = 'string') => {

       let answ = content;
       switch(name){
           case 'ingredients' : {
               answ = answ.toLowerCase()
               break;
           }
           default: {
               answ = content;
               break;
           }
       }

       return answ;

    }

    getRecordById = id =>{
        return this.goods.find(gd => gd.id === id)
    }
}