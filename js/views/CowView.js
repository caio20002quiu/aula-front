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
            <div class="result-item">
                <p>Tip amount <span>/person</span></p>
                <span class="value">$${this.calculateTip()}</span>
            </div>
            <div class="result-item">
                <p>Total <span>/person</span></p>
                <span class="value">$${this.calculateValue()}</span>
            </div>

            <button class="action">Reset</button>
        `
    }
}