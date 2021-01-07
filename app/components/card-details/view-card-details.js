 export default class ViewCardDetails{
    htmlModals = document.querySelector('.modals')

     constructor() {
        this.htmlModals.insertAdjacentHTML('beforeend', `
        <div class="modal fade " id="ModalDetails" tabIndex="-1" aria-labelledby="ModalDetailsLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title detail-name" id="ModalDetailsLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">                
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`)

         this.htmlGoodsName = document.querySelector('#ModalDetails .detail-name')
         this.htmlGoodsImg = document.querySelector('#ModalDetails .modal-body')
    }

    render = data => {
        this.htmlGoodsName.innerText = data.name;
        this.htmlGoodsImg.innerHTML = `
            <div>
                <p>Product id: ${ data.id }</p>
                <img class="w-50 border-0 img-thumbnail" src="${ data.img }" alt="">
                <p>Available amount: ${ data.amount }</p>
                <p>Ingredient: ${ data.ingredients }</p>
                <p>Manufacture: ${ data.manufacture}</p>
                <p>Price: ${ data.price} UAH per ${ data.units }</p>
            </div>`;
    }
 }
