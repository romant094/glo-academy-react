const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        pauload: newMenu
    }
};

export {
    menuLoaded
}