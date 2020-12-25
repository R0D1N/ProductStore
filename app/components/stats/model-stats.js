export default class ModelStats {
    link = "https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json"

    stats = []

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
                this.stats = this.parseData(d.feed.entry)
                return this.stats
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
            //acc[index][name] = this.parseContent(content.$t, type)
            return acc
        }, [])
    }

/*    parseContent = (content, type = 'string') => {
        let answ = content


        if (type == 'float'){
            answ = +(content.replace(',','.'))
        }

        return answ
    }*/

}