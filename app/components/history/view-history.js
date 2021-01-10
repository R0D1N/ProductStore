export default class ViewHistory{
    htmlModals = document.querySelector('.modals')

    constructor() {
        this.htmlModals.insertAdjacentHTML('afterbegin', `
        <div class="modal fade " id="ModalHistory" tabIndex="-1" aria-labelledby="ModalHsLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-xl">
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

    render = data => {

        if (data.length === 0) {
            this.htmlHistoryBody.innerHTML = `
            <div>
                <p>You have cleat history</p>
                <p>Hmm, you should to buy something :)</p>
            </div>`;

            this.htmlHistoryFooter.innerHTML = ``
            this.htmlHistoryFooter.innerHTML = `<button type="button" class="btn btn-warning" data-bs-dismiss="modal">Later</button>`
        }else{
            this.htmlHistoryBody.innerHTML = ``;
            console.log(data[0].order[0])
            data.forEach(({ name, LName, email, city, date,  }) => {

            });

            const{name, LName } = data

            for (let i = 0; i < data.length; i++){
                const historyItem = document.createElement("li");
                historyItem.innerHTML = `             
                <p>Name: ${ data[i].name} surname: ${data[i].LName}</p>
                <p>Email: ${data[i].email}</p>             
                <p>City: ${data[i].city}</p>
                <p>Date: ${data[i].date}</p>`;

                this.htmlHistoryBody.append(historyItem);
                for (let j = 0; j < data[i].order.length; j++){
                    const orderItem = document.createElement('div');

                    orderItem.innerHTML = `
                    <p><><><><><><><><><><><></p>
                    <p>ID: ${data[i].order[j].id}</p>
                    <p>Title: ${data[i].order[j].name}</p>
                    <p>Company: ${data[i].order[j].manufacture}</p>
                    <p>Price${data[i].order[j].price} UAH per ${data[i].order[j].units}</p>
                    <p>You'v bought:${data[i].order[j].count} items</p>`;
                    historyItem.append(orderItem)
                }
            }
        }
    }
}