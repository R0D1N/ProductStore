export default class ViewGoods {
    htmlCardLayout = document.querySelector('.cards')


    constructor(onDetails) {
        this.onDetails = onDetails;
    }

    render = arr => {
        this.htmlCardLayout.innerHTML = arr.map(this.renderCard).join('');

        [...this.htmlCardLayout.querySelectorAll('.cards .btn-details')].forEach(btn => btn.addEventListener('click', this.onDetails))
    }

    renderCard = ({id, name, manufacture, units, price, img}) => {
        return `
            <div class="col">
                <div class="card h-100">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${manufacture}</p>
                        <p class="card-text">${price} UAH</p>
                        <p class="card-text"><small class="text-muted">${units}</small></p>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary ">In cart</button>
                        <button type="button" class="btn btn-link btn-details" data-bs-toggle="modal" data-bs-target="#ModalDetails" data-details-id="${id}">details
                    </div>
                </div>
            </div>`
    }
}