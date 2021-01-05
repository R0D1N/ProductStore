export default class ViewGoods {
    htmlCardLayout = document.querySelector('.cards')
    htmlSearchInput = document.querySelector('.inp-search')
    htmlSortInput = document.querySelector('.select-sort')
    htmlFilterInput = document.querySelector('.select-filter')

    constructor(cbSearch, cbSort, cbFilter) {
        this.htmlSearchInput.addEventListener('input', cbSearch)
        this.htmlSortInput.addEventListener('input', cbSort)
        this.htmlFilterInput.addEventListener('input', cbFilter)
    }

    render = arr => {
        console.log(1)
        this.htmlCardLayout.innerHTML = arr.map(this.renderCard).join('');
    }

    renderCard = ({id, name, manufacture, category, ingredients, amount, units, price, img}) => {
        return `
      <div class="col">
        <div class="card h-100">
            <div class="card-struct">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${manufacture}</p>
                  <p class="card-text">${price} UAH</p>
                  <p class="card-text"><small class="text-muted">${units}</small></p>
                  <button type="button" class="btn btn-primary ">In cart</button>
                  <button type="button" class="btn btn-link ">details</button>
                </div>
            </div>
        </div> 
      </div>`
    }
}
