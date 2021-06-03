/**
 * the default widget key interface. infered from design source.
 */
interface WidgetKey {
    id: string;
    originName: string;
}
type WidgetKeyLike = WidgetKey;

export class Widget {
    readonly _type: string;
    key?: WidgetKeyLike;
    children: Widget[];

    constructor(p?: { key: WidgetKeyLike }) {
        this.key = p?.key;
    }
}
