export default class Service {
    _api = 'db.json';

    async getData() {
        const res = await fetch(this._api);

        if(!res.ok) {
            throw new Error(`Could not fetch ` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
}