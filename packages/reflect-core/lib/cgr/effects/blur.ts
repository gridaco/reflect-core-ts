import assert from "assert";
import { Widget, WidgetKey } from "../../widget";

export interface BlurEffect {
    readonly type: "LAYER_BLUR" | "BACKGROUND_BLUR";
    readonly radius: number;
    readonly visible: boolean;
}

export class Blur extends Widget {
    readonly _type = "BluerEffects";
    readonly blur: BlurEffect[];
    readonly child?: Widget;
    constructor({
        key,
        blur,
        child,
    }: {
        key: WidgetKey;
        blur: BlurEffect[];
        child: Widget;
    }) {
        super({ key });
        assert(typeof blur, "blur is required");
        this.blur = blur;
        this.child = child;
    }
}
