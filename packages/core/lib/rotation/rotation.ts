import assert from "assert";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

export class Rotation extends SingleChildRenderObjectWidget {
    readonly _type = "Rotation";
    readonly rotation: number;

    constructor({
        key,
        rotation,
        child,
    }: {
        key: WidgetKey;
        rotation: number;
        child: Widget;
    }) {
        super({ key, child });
        assert(typeof rotation, "rotation is required");
        this.rotation = rotation;
    }
}
