export default class ViewCart {
    htmlModals = document.querySelector('.modals')

    constructor(onDel, onPlus, onBuy, onForm) {
        this.onForm = onForm;
        this.onBuy = onBuy;
        this.onDel = onDel;
        this.onPlus = onPlus;

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
            this.htmlCartBody.innerHTML = `
            <div>
                <p>Your cart is empty</p>
            </div>`;

            this.htmlCartFooter.innerHTML = ``
            this.htmlCartFooter.innerHTML = `<button type="button" class="btn btn-warning" data-bs-dismiss="modal">Later</button>`

        } else {
            this.htmlCartBody.innerHTML = ``;
            data.forEach(({id, name, manufacture, price, img, units, count}) => {
                const cartItem = document.createElement("li");
                cartItem.innerHTML = `             
                <p>${name} ID: '${id}' </p>
                <img class="w-25 border-0 img-thumbnail" src="${img}" alt="">
                <p>Company: ${manufacture}</p>             
                <p>${price} UAH per ${units}</p>
                <p>Count: ${count} </p>
                <div>
                    <button type="button" class="btn btn-danger btn-del" data-del-id="${id}">Delete it                   
                    <button type="button" class="btn btn-danger btn-add ms-4" data-add-id="${id}">+
                </div>`;

                this.htmlCartBody.append(cartItem);
            });

            this.htmlCartFooter.innerHTML = ``;
            const cartFooter = document.createElement('div');
            cartFooter.classList.add("d-flex", "justify-content-around")
            cartFooter.innerHTML = `
            <button type="button" class="btn btn-warning me-2" data-bs-dismiss="modal">Later</button>
            <h2 class="me-2">Summary: ${sum}</h2>
            <button type="button" class="btn btn-success btn-form">Buy</button>`;
            this.htmlCartFooter.append(cartFooter);

            [...this.htmlCartBody.querySelectorAll('.btn-del')].forEach(btn => btn.addEventListener('click', this.onDel));
            [...this.htmlCartBody.querySelectorAll('.btn-add')].forEach(btn => btn.addEventListener('click', this.onPlus));

            this.htmlBuyBtn = document.querySelector('.btn-form');
            this.htmlBuyBtn.addEventListener('click', this.onBuy);
        }
    }

    renderForm = _ => {

        this.htmlCartBody.innerHTML = ``;
        this.htmlCartFooter.innerHTML = ``;
        this.htmlCartBody.innerHTML = `
            
            <form class="row g-3 needs-validation" name="userInfo" id="form">
                  <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" name="name" required>
                        <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02"  name="LName" required>
                        <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-8">
                          <label for="floatingInputValue">E-mail</label> 
                          <input type="email" class="form-control" id="validationCustom03" name="email" placeholder="name@example.com">
                  </div>
                  <div class="col-md-8">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom04" name="city" required>
                  </div>
                  <div class="col-12">
                        <button class="btn btn-primary btn_submit" type="submit">Submit form</button>
                  </div>
                </form>`;

        this.htmlForm = document.getElementById('form')
        this.htmlForm.addEventListener('submit', this.onForm)
    }
}
