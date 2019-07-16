const initialState = {
    menu: []
};
const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'NEW_LOADED':
            return {
                menu: payload
            };
        default:
            return state

    }
};

export default reducer;