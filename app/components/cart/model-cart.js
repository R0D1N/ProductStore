export default class ModelCart {

    addToCart = (data, array) => {
        array.push(JSON.stringify(data))
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(array));
    }
}