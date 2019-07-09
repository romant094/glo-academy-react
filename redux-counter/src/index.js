import {createStore} from 'redux';

const d = document,
    incBtn = d.querySelector('.counter-controls__inc'),
    decBtn = d.querySelector('.counter-controls__dec'),
    resBtn = d.querySelector('.counter-controls__res'),
    counter = d.querySelector('.counter-block span'),
    counterWrap = d.querySelector('.counter-block'),
    width = counterWrap.offsetWidth,
    height = counterWrap.offsetHeight;

const reducer = (state = 0, action) => {
    const {type} = action;

    switch (type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            state = 0;
            return state;
        default:
            return state;
    }
};

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

const store = createStore(reducer);

store.subscribe(() => {
    counter.textContent = store.getState();

    counterWrap.style.width = `${width + store.getState() * 10}px`;
    counterWrap.style.height = `${height + store.getState() * 10}px`;
});

incBtn.addEventListener('click', () => {
    store.dispatch(inc())
});

decBtn.addEventListener('click', () => {
    store.dispatch(dec())
});

resBtn.addEventListener('click', () => {
    store.dispatch(res())
});

