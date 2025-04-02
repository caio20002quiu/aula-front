
class BillView {
    
    render() {
        return `
            <form id="bill-form">
                <div class="input-group">
                <label for="bill" style="font-size: 25px ">Bill</label>
                <input type="text" id="bill">
                </div>
                <div class="radio-group">
                <span style="font-size: 25px ">Select Tip %</span>
                <div class="radio-option" >
                    <label id="label-5" for="radio-5" style="font-size: 20px">5%</label>
                    <input type="radio" value="5" name="tip" id="radio-5">
                </div>
                <div class="radio-option">
                    <label for="radio-10" style="font-size: 20px">10%</label>
                    <input type="radio" value="10" name="tip" id="radio-10">
                </div>
                <div class="radio-option">
                    <label for="radio-15" style="font-size: 20px">15%</label>
                    <input type="radio" value="15" name="tip" id="radio-15">
                </div>
                <div class="radio-option">
                    <label for="radio-25" style="font-size: 20px">25%</label>
                    <input type="radio" value="25" name="tip" id="radio-25">
                </div>
                <div class="radio-option" style="font-size: 20px">
                    <label for="radio-50">50%</label>
                    <input type="radio" value="50" name="tip" id="radio-50">
                </div>
                </div>

                <div class="input-group">
                <label for="people" style="font-size: 25px">Number of people</label>
                <input type="text" id="people">
                </div>

                <button class="action" style="font-size: 20px">Calculate</button>
            </form>
        `;
    }
}