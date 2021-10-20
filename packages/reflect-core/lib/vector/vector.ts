import { Background } from "../background";
import { DefaultStyleWidget, WidgetKey } from "../widget";

export class VectorWidget extends DefaultStyleWidget {
    readonly _type = "VectorWidget";
    readonly data: string;
    readonly fill?: Background;
    constructor(p: {
        key: WidgetKey;
        width: number;
        height: number;

        /**
         * svg data
         */
        data: string;
        fill?: Background;
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
