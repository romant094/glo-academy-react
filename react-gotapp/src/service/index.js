export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(this._apiBase + url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResourse('/characters?page=10&pageSize=10');
        return res.map(this._transformChar);
    }

    async getCharacter(id) {
        const res= await this.getResourse(`/characters/${id}`)
        return this._transformChar(res);
    }

    getAllHouses() {
        return this.getResourse('/houses')
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}`)
    }

    getAllBooks() {
        return this.getResourse('/books')
    }

    getBook(id) {
        return this.getResourse(`/books/${id}`)
    }

    _transformChar = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    };
}