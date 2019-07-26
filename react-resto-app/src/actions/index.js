const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
};

const menuDownloadError = () => {
    return {
        type: 'MENU_DNL_ERROR'
    }
};

const addItemToCart = (item) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: item
    }
};

const deleteItemFromCart = (id) => {
    return {
        type: 'DELETE_ITEM_FROM_CART',
        payload: id
    }
};

export {
    menuLoaded,
    menuRequested,
    menuDownloadError,
    deleteItemFromCart,
    addItemToCart
}