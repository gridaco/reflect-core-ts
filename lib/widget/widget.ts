export class Widget {
    readonly _type: string;
    key?: string;
    children: Widget[];

    constructor(p?: { key: string }) {
        this.key = p?.key;
    }
}
