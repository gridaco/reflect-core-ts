export class Widget {
    key?: string;

    constructor(p?: { key: string }) {
        this.key = p?.key;
    }
}
