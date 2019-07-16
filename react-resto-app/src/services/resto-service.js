export default class RestoService {
    _apiBase = 'http://localhost:3001';

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);
        const {ok, status} = res;

        if (!ok) {
            throw new Error(`Could not fetch ${url}, status ${status}`)
        } else {
            return await res.json();
        }
    };

    getItems = async () => {
        const res = await this.getResource('/menu');
        return res;
    };

}