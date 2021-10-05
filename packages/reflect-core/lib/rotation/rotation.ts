import assert from "assert";
import { Widget, WidgetKey } from "../widget";

export class Rotation extends Widget {
    readonly _type = "Rotation";
    readonly rotation: number;
    readonly child?: Widget;

    constructor({
        key,
        rotation,
        child,
    }: {
        key: WidgetKey;
        rotation: number;
        child: Widget;
    }) {
        super({ key });
        assert(typeof rotation, "rotation is required");
        this.rotation = rotation;
        this.child = child;
    }
}
