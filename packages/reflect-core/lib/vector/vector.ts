import { Color } from "..";
import { Widget, WidgetKey } from "../widget";

export class VectorWidget extends Widget {
    readonly data: string;
    readonly fill?: Color;
    constructor(p: {
        key: WidgetKey;
        width: number;
        height: number;

        /**
         * svg data
         */
        data: string;
        fill?: Color;
    }) {
        super(p);
        // region general
        this.width = p.width;
        this.height = p.height;
        //

        // region svg related
        this.data = p.data;
        this.fill = p.fill;
        // endregion
    }
}
