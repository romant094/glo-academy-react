export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const res = () => ({type: 'RES'});
export const dow = (value) => {
    return {
        type: 'DOW',
        value
    }
};