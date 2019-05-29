const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    const [, cash] = [...arguments];
    let total = own;

    cash.forEach(item => total += item);
    return total;
}

const {cash, eu: [srl], rus} = sponsors;
const {eu} = sponsors;

const money = calcCash(undefined, cash);

export {srl, rus, eu, money};