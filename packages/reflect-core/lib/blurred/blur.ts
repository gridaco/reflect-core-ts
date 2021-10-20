import assert from "assert";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";
import { BlurEffect } from "../cgr";

export class Blurred extends SingleChildRenderObjectWidget {
    readonly _type = "Blurred";
    readonly blur: BlurEffect;

    constructor({
        key,
        blur,
        child,
    }: {
        key: WidgetKey;
        blur: BlurEffect;
        child: Widget;
    }) {
        super({ key, child });
        assert(typeof blur, "blur is required");
        this.blur = blur;
    }
}
