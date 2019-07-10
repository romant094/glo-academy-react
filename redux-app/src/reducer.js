export const reducer = (state = 0, action) => {
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