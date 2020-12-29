export default class ViewStats {
    htmlCardLayout = document.querySelector('.cards')
    htmlSearchInput = document.querySelector('.inp-search')

    constructor(cbSearch) {
        this.htmlSearchInput.addEventListener('input', cbSearch)
    }


    render = arr => {
        this.htmlCardLayout.innerHTML = arr.slice(1).map(this.renderCard).join('');
    }

    renderCard = ({id, name, manufacture, category, ingredients, amount, units, price, img}) => {
        return `
      <div class="col">
        <div class="card h-100">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${manufacture}</p>
              <p class="card-text">${price} UAH</p>
              <p class="card-text"><small class="text-muted">${units}</small></p>
              <button type="button" class="btn btn-primary ">In cart</button>
            </div>
        </div> 
      </div>`
    }
}
