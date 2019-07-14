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

export const addFilter = (filter) => {
    return {
        type: 'ADD_FILTER',
        payload: filter
    }
};

export const removeFilter = (items) => {
    return {
        type: 'REMOVE_FILTER',
        payload: items
    }
};