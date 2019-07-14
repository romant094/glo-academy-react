const arr = [
    {
        id: 1,
        label: 'Learn React',
        done: true
    },
    {
        id: 2,
        label: 'Redux is awesome',
        done: false
    },
    {
        id: 3,
        label: 'Drink coffee',
        done: true
    },
    {
        id: 4,
        label: 'Eat breakfast',
        done: true
    }
];

export const reducer = (state = arr, action) => {
    const {type, payload} = action;
    const newState = state.map(a => Object.assign({}, a));

    switch (type) {
        case 'ADD':
            const newItem = {
                label: payload,
                done: false,
                id: newState.length + 1
            };
            newState.push(newItem);
            return state = newState;
        case 'CHECK':
            newState[payload].done = !newState[payload].done;
            return state = newState;
        case 'FILTER':
            if (payload === true) {
                return newState.filter(item => item.done !== true);
            } else {
                return state;
            }
        default:
            return state;
    }
};