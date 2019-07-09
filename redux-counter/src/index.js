import {createStore} from 'redux';

const d = document,
    incBtn = d.querySelector('.counter-controls__inc'),
    decBtn = d.querySelector('.counter-controls__dec'),
    resBtn = d.querySelector('.counter-controls__res'),
    dowBtn = d.querySelector('.counter-controls__dow'),
    uplBtn = d.querySelector('.counter-controls__upl'),
    counter = d.querySelector('.counter-block span'),
    counterWrap = d.querySelector('.counter-block'),
    width = counterWrap.offsetWidth,
    height = counterWrap.offsetHeight;

const reducer = (state = 0, action) => {
    const {type, value} = action;

    switch (type) {
        case 'DOW':
            state = value;
            return state;
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
const dow = (value) => ({type: 'DOW', value});

const store = createStore(reducer);

store.subscribe(() => {
    counter.textContent = store.getState();

    counterWrap.style.width = `${width + store.getState()}px`;
    counterWrap.style.height = `${height + store.getState()}px`;
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

dowBtn.addEventListener('click', () => {
    fetch('http://localhost:3001/numbers')
        .then(res => res.json())
        .then(res => {
            const index = Math.floor(Math.random() * res.length);
            const result = +res[index]['const'] || +res[index]['saved'];
            store.dispatch(dow(result));
        });
});

uplBtn.addEventListener('click', () => {
    const data = {saved: store.getState()};
    fetch('http://localhost:3001/numbers', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res=>console.log(res))
});
