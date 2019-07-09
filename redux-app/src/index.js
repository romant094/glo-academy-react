import {createStore} from "redux";

const counter = document.querySelector('#counter'),
    rndBtn = document.querySelector('#rnd'),
    incBtn = document.querySelector('#inc'),
    decBtn = document.querySelector('#dec');

const reducer = (state = 0, action) => {
    const {type, value} = action;

    switch (type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + value;
        default:
            return state;
    }
};
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});

const store = createStore(reducer);

store.subscribe(() => {
    counter.textContent = store.getState();
});

incBtn.addEventListener('click', () => {
    store.dispatch(inc());
});

decBtn.addEventListener('click', () => {
    store.dispatch(dec());
});

rndBtn.addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10) + 1;
    store.dispatch(rnd(value));
});