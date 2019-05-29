export default class Names {
    constructor(names) {
        this.names = names;
    }

    filterNames() {
        return [...this.names.filter(item => item.length > 0)]
    }

    transformNames() {
        this.names = this.filterNames();
        return this.names.map(item => item.toLowerCase().trim())
    }
}
