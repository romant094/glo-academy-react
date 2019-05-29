'use strict';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [...employers.filter(item => item.length > 0)];

employersNames = employersNames.map(item => item.toLowerCase().trim());

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

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
}

makeBusiness.apply(null, ['Sam', undefined, money, employersNames]);