import employersNames from './employers';
import {srl, rus, eu, money} from './sponsors';

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

const business = new Business('Sam', undefined, money, employersNames);
business.showInfo();