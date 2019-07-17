export default class RestoService {
    _apiBase = 'http://localhost:3001';

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);

        return await res.json();
    };

    getItems = async () => await this.getResource('/menu');
}