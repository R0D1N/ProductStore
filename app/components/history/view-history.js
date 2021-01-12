export default class ViewHistory{
    htmlModals = document.querySelector('.modals')

    constructor() {
        this.htmlModals.insertAdjacentHTML('afterbegin', `
        <div class="modal fade " id="ModalHistory" tabIndex="-1" aria-labelledby="ModalHsLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="ModalHsLabel">Cart</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                
                            </div>
                                <div class="modal-footer">                
                                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                                </div>                                      
                        </div>
                    </div>
        </div>`)

        this.htmlHistoryBody = document.querySelector('#ModalHistory .modal-body')
        this.htmlHistoryFooter = document.querySelector('#ModalHistory .modal-footer')
    }

    render = _ => {

        this.data = JSON.parse(localStorage.getItem('history'));

        if ((this.data === null) || (this.data.length === 0)) {
            this.htmlHistoryBody.innerHTML = `
            <div>
                <p>You have cleat history</p>
                <p>Hmm, you should to buy something :)</p>
            </div>`;

            this.htmlHistoryFooter.innerHTML = ``
            this.htmlHistoryFooter.innerHTML = `<button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>`
        }else{
            this.data.reverse();
            this.htmlHistoryBody.innerHTML = ``;

            for (let i = 0; i < this.data.length; i++){
                const historyItem = document.createElement("li");
                historyItem.innerHTML = `             
                <h5>Name: ${ this.data[i].name} | Surname: ${ this.data[i].LName}</h5>
                <p>Date: ${ this.data[i].date}</p>
                <p>Email: ${ this.data[i].email}</p> 
                <p>Phone: ${ this.data[i].phone }</p>            
                <p>City: ${ this.data[i].city}</p>               

                <h4>Summary: ${this.data[i].sum}</h4>`;

                this.htmlHistoryBody.append(historyItem);
                for (let j = 0; j < this.data[i].order.length; j++){
                    const orderItem = document.createElement('div');

                    orderItem.innerHTML = `
                    <p><><><><><><><><><><><></p>
                    <p>ID: ${ this.data[i].order[j].id}</p>
                    <p>Title: ${ this.data[i].order[j].name}</p>
                    <p>Company: ${ this.data[i].order[j].manufacture}</p>
                    <p>Price: ${ this.data[i].order[j].price} UAH per ${ this.data[i].order[j].units}</p>
                    <p>You'v bought: ${ this.data[i].order[j].count} items</p>`;
                    historyItem.append(orderItem)
                }


            }
        }
    }
}