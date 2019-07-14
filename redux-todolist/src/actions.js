export const check = (id) => {
    return {
        type: 'CHECK',
        payload: id
    }
};

export const add = (label) => {
    return {
        type: 'ADD',
        payload: label
    }
};

export const filter = (filter) => {
    return {
        type: 'FILTER',
        payload: filter
    }
};