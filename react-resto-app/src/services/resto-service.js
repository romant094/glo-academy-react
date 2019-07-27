export default class RestoService {
    _apiBase = 'http://localhost:3001';

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);

        return await res.json();
    };

    getMenuItems = async () => {
        return await this.getResource('/menu')
    };

    getMenuItem = async (id) => {
        return await this.getResource(`/menu/${id}`)
    };

    sendOrder = async (cart) => {
        return await fetch('http://localhost:3001/order', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })

    };
}