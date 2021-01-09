export default class ViewSoSe{
    htmlHeader = document.querySelector('header');

    constructor(cbSort, cbSearch, cbFilter, onCart) {

        this.onCart = onCart;

        this.htmlHeader.insertAdjacentHTML('beforeend', `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Product Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-auto mb-lg-0">
                    <div class="d-flex">
                        <div class="control">
                            <div class="select is-warning">
                                <select class="select-sort">
                                    <option value="high-price">Expensive first</option>
                                    <option value="low-price">Cheap first</option>
                                </select>
                            </div>
                            <div class="select is-warning">
                                <select class="select-filter">
                                    <option value="Tea & Coffee">Tea & Coffee</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Bread & Bakery">Bread & Bakery</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Sweets">Sweets</option>
                                    <option value="Sauces">Sauces</option>
                                    <option value="Grains, Pasta & Sides">Grains, Pasta & Sides</option>
                                    <option value="Meat & Seafood">Meat & Seafood</option>
                                    <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                                    <option value="Dairy, Eggs & Cheese">Dairy, Eggs & Cheese</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2 inp-search" type="search" placeholder="Search" aria-label="Search">
                    <button type="button" class="btn btn-success btn-cart" data-bs-toggle="modal" data-bs-target="#ModalCart">MyCart</button>
                </form>
            </div>
        </div>
    </nav>`)

        this.htmlSearchInput = document.querySelector('.inp-search');
        this.htmlSortInput = document.querySelector('.select-sort');
        this.htmlFilterInput = document.querySelector('.select-filter');
        this.htmlCartBtn = document.querySelector('.btn-cart');

        this.htmlSearchInput.addEventListener('input', cbSearch);
        this.htmlSortInput.addEventListener('input', cbSort);
        this.htmlFilterInput.addEventListener('input', cbFilter);
        this.htmlCartBtn.addEventListener('click', this.onCart);
    }
}