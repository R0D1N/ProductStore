export default class ViewStats {
    htmlCardLayout = document.querySelector('.card-group')

    constructor() {

    }

    render = arr => {
        this.htmlCardLayout.innerHTML = arr.map(this.renderCard).join('')
    }

    renderCard = ({id, name, manufacture, category, ingredients, amount, units, price, img}) => {
        return `
        <div class="card" style="width: 18rem;">
          <img src="img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${price}</p>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>`;
    }
}
