import { Widget, WidgetKey } from "../widget";

export class VectorWidget extends Widget {
    readonly data: string;
    constructor(p: { key: WidgetKey; data: string }) {
        super(p);
        this.data = p.data;
    }
}
