export class Widget {
    readonly _type: string;
    key?: string;

    constructor(p?: { key: string }) {
        this.key = p?.key;
    }
}
