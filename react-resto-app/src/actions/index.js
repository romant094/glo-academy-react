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

export {
    menuLoaded,
    menuRequested,
    menuDownloadError
}