import { BorderRadius } from "..";
import { Clip } from "../clip";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

export interface ClipRRectManifest {
    borderRadius?: BorderRadius;
    clipBehavior: Clip;
    child?: Widget;
}

/**
 * [Flutter#ClipRRect](https://api.flutter.dev/flutter/widgets/ClipRRect/ClipRRect.html)
 */
export class ClipRRect
    extends SingleChildRenderObjectWidget
    implements ClipRRectManifest {
    readonly _type = "ClipRRect";
    borderRadius?: BorderRadius;
    clipBehavior: Clip;

    constructor({
        key,
        borderRadius = BorderRadius.zero,
        clipBehavior = Clip.antiAlias,
        child,
        ...manifest
    }: { key: WidgetKey } & Omit<ClipRRectManifest, "clipBehavior"> & {
            clipBehavior?: Clip;
        }) {
        super({ key, child: child });

        this.borderRadius = borderRadius;
        this.clipBehavior = clipBehavior;
    }
}
