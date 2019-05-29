export default class Money {
    constructor(own = 0, cash) {
        this.own = own;
        this.cash = cash;
    }

    calcCash() {
        let total = this.own;

        this.cash.forEach(item => total += item);
        return total;
    }
}