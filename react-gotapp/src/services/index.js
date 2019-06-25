export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(this._apiBase + url);
        const errors = [{err: 404, text: 'Not found'}, {err: 408, text: 'Timeout'}, {err: 410, text: 'Deleted'}];
        const {status} = res;

        if (status !== 200) {
            if (status === 404 || status === 408 || status === 410) {
                return errors.find(item => item.err === status);
            } else {
                throw new Error(`Could not fetch ${url}, status ${status}`)
            }
        } else {
            return await res.json();
        }
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?pages=10&pageSize=10');
        return res.map(this._transformChar);
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformChar(res);
    };

    getAllHouses = async () => {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse);
    };

    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    };

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    };

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    };

    _extractId = item => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    };

    _isData = item => {
        for (const prop in item) {
            if (item[prop] === '') {
                item[prop] = '<no data>'
            }
        }
        return item;
    };

    _transformChar = (char) => {
        const item = this._isData(char);

        return {
            name: item.name,
            gender: item.gender,
            born: item.born,
            died: item.died,
            culture: item.culture,
            id: this._extractId(char)
        }
    };

    _transformHouse = (house) => {
        const item = this._isData(house);

        return {
            name: item.name,
            region: item.region,
            words: item.words,
            founded: item.founded,
            id: this._extractId(house)
        }
    };

    _transformBook = (book) => {
        const item = this._isData(book);

        return {
            name: item.name,
            numberOfPages: item.numberOfPages,
            publisher: item.publisher,
            released: item.released,
            id: this._extractId(book)
        }
    };
}