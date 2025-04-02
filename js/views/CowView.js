class CowView {
    constructor(bill, numberOfPeople, tipAmmount) {
        this.bill = parseFloat(bill);
        this.numberOfPeople = parseFloat(numberOfPeople);
        this.tipAmmount = parseFloat(tipAmmount);
    }

    calculateValue() {
        return this.bill * (1+this.tipAmmount/100) / this.numberOfPeople;
    }

    calculateTip() {
        return this.bill * this.tipAmmount/100 / this.numberOfPeople;
    }

    render() {
        return `
            <div class="result-item" >
                <p style="font-size: 20px; padding-bottom: 0px">Tip amount <span>/person</span></p>
                <span class="value" style="font-size: 20px">$${this.calculateTip()}</span>
            </div>
            <div class="result-item">
                <p style="font-size: 20px; padding-bottom: 0px">Total <span>/person</span></p>
                <span class="value"style="font-size: 20px; padding-bottom: 0px">$${this.calculateValue()}</span>
            </div>

            <button class="action" style="font-size: 20px; padding-bottom: 0px">Reset</button>
        `
    }
}