class Controller {
    constructor(billContainer, cowContainer) {
        this.billContainer = billContainer;
        this.cowContainer = cowContainer;

        this.render()
    }

    render() {
        this.billContainer.innerHTML = new BillView().render();
        this.cowContainer.innerHTML = new CowView(0,0,1).render();

        this.billContainer.querySelector(".action").addEventListener("click", (e) => {
            this.calculateBill(e);
        });

        this.cowContainer.querySelector(".action").addEventListener("click", (e) => {
            this.reset();
        });
    }

    calculateBill(e) {
        e.preventDefault();
        let bill = this.billContainer.querySelector("#bill").value;
        let tip = 0; 
        this.billContainer.querySelectorAll("input[type=radio]").forEach(element => {
            if (element.checked) {
                tip = element.value;
            }
        });
        let people = this.billContainer.querySelector("#people").value;

        this.cowContainer.innerHTML = new CowView(bill,people,tip).render();
    }

    reset() {
        this.billContainer.innerHTML = new BillView().render();
    }
}