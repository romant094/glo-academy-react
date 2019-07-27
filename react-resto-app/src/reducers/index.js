const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};
const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    const {items} = state;
    const newItems = items.map(item => Object.assign({}, item));

    switch (type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu
            };
        case 'MENU_DNL_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'DELETE_ITEM_FROM_CART':
            const index = items.findIndex(item => item.id === payload);
            newItems.splice(index, 1);
            return {
                ...state,
                items: newItems
            };
        case 'CLEAR_CART':
            console.log('clear');
            return {
                ...state,
                items: []
            };
        case 'ADD_ITEM_TO_CART':
            const cartItem = {...payload, count: 1};
            const indx = newItems.findIndex(item => item.id === payload.id);
            if (indx === -1) {
                newItems.push(cartItem);
            } else {
                newItems[indx].count++;
            }
            return {
                ...state,
                items: newItems
            };
        default:
            return state

    }
};

export default reducer;