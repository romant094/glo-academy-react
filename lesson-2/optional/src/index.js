import Money from './sponsors';
import Names from './employers';

const index = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu: [srl], rus} = sponsors;
const {eu} = sponsors;

const money = new Money(undefined, cash);
const total = money.calcCash();

const names = new Names(index);
let employersNames = names.transformNames();

class Business {
    constructor(owner, director = 'Victor', cash, emp){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    showInfo(){
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have sponsors: ');
        console.log([...eu, ...rus, 'unexpected sponsor'].join(', '));
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}

const business = new Business('Sam', undefined, total, employersNames);
business.showInfo();