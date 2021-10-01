import assert from "assert";
import { Widget, WidgetKey } from "../widget";
import { BlurEffect } from "../cgr";

export class Blurred extends Widget {
    readonly _type = "Blurred";
    readonly blur: BlurEffect;
    readonly child?: Widget;

    constructor({
        key,
        blur,
        child,
    }: {
        key: WidgetKey;
        blur: BlurEffect;
        child: Widget;
    }) {
        super({ key });
        assert(typeof blur, "blur is required");
        this.blur = blur;
        this.child = child;
    }
}
