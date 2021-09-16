import { Widget, WidgetKey } from "../widget";

export class VectorWidget extends Widget {
    readonly data: string;
    constructor(p: {
        key: WidgetKey;
        width: number;
        height: number;

        /**
         * svg data
         */
        data: string;
    }) {
        super(p);
        // region general
        this.width = p.width;
        this.height = p.height;
        //

        // region svg related
        this.data = p.data;
        // endregion
    }
}
