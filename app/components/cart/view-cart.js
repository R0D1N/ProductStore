export default class ViewCart {
    htmlModals = document.querySelector('.modals')

    constructor() {

        this.htmlModals.insertAdjacentHTML('beforeend', `
        <div class="modal fade " id="ModalCart" tabIndex="-1" aria-labelledby="ModalCartLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title " id="ModalCartLabel">Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                    </div>
                        <div class="modal-footer">                
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Later</button>
                        </div>
                    
                    
                </div>
            </div>
        </div>`)

        this.htmlCartBody = document.querySelector('#ModalCart .modal-body')
        this.htmlCartFooter = document.querySelector('#ModalCart .modal-footer')
    }

    render = (data, sum) => {

        if (data.length === 0) {
            console.log(data.length);

            this.htmlCartBody.innerHTML = `
            <div>
                <p>Your cart is empty</p>
            </div>`;

        } else {
            this.htmlCartBody.innerHTML = ``;
            data.forEach(({id, name, manufacture, price, img, units, count}) => {
                const cartItem = document.createElement("li");
                cartItem.innerHTML = `             
                <p>${name} ID: '${id}' </p>
                <img class="w-25 border-0 img-thumbnail" src="${img}" alt="">
                <p>Company: ${manufacture}</p>             
                <p>${price} UAH per ${units}</p>
                <p>Count: ${count} </p>`;
                this.htmlCartBody.append(cartItem);
            });

            this.htmlCartFooter.innerHTML = ``;

            const cartFooter = document.createElement('div');
            cartFooter.classList.add("d-flex", "justify-content-around")
            cartFooter.innerHTML = `
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Later</button>
            <h2>Summary: ${sum}</h2>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Buy</button>`;
            this.htmlCartFooter.append(cartFooter);
        }
    }
}


