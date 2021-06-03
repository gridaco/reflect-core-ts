/**
 * the default widget key interface. infered from design source.
 */
export interface WidgetKey {
    id: string;
    originName: string;
}

export class WidgetKey {
    id: string;
    originName: string;
    constructor({
        id = `${Math.random()}`.replace(".", ""),
        originName = "unknown",
    }: {
        id: string;
        originName: string;
    }) {
        this.id = id;
        this.originName = originName;
    }
}

type WidgetKeyLike = WidgetKey;

export class Widget {
    readonly _type: string;
    readonly key?: WidgetKeyLike;
    children: Widget[];

    constructor(p?: { key: WidgetKeyLike }) {
        this.key = p?.key;
    }
}
