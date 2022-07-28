import assert from "assert";
import { Widget, WidgetKey } from "../../widget";

export interface BlurEffect {
    readonly type: "LAYER_BLUR" | "BACKGROUND_BLUR";
    readonly radius: number;
    readonly visible: boolean;
}
