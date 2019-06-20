export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResourse = async (url) => {
        const res = await fetch(this._apiBase + url);
        const errors = [{id: 404, text: 'Not found'}, {id: 408, text: 'Timeout'}, {id: 410, text: 'Deleted'}];
        const {status} = res;

        if (status !== 200) {
            if (status === 404 || status === 408 || status === 410) {
                return errors.find(item => item.id === status);
            } else {
                throw new Error(`Could not fetch ${url}, status ${status}`)
            }
        } else {
            return await res.json();
        }
    };

    getAllCharacters = async () => {
        const res = await this.getResourse('/characters?page=10&pageSize=10');
        return res.map(this._transformChar);
    };

    getCharacter = async (id) => {
        const res = await this.getResourse(`/characters/${id}`);
        if (res.id) {
            return res
        }
        return this._transformChar(res);
    };

    getAllHouses = () => {
        return this.getResourse('/houses')
    };

    getHouse = (id) => {
        return this.getResourse(`/houses/${id}`)
    };

    getAllBooks = () => {
        return this.getResourse('/books')
    };

    getBook = (id) => {
        return this.getResourse(`/books/${id}`)
    };

    _extractId = item => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    };

    _transformChar = (char) => {

        for (let prop in char) {
            if (char[prop] === '') {
                char[prop] = '<no data>'
            }
        }

        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            key: this._extractId(char)
        }
    };

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    };

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    };
}