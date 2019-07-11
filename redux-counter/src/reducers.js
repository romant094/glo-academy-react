export const reducer = (state = 0, action) => {
    const {type, value} = action;

    switch (type) {
        case 'DOW':
            return value;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return 0;
        default:
            return state;
    }
};