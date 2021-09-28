import { BorderRadius } from "..";
import { Clip } from "../clip";
import { Widget, WidgetKey } from "../widget";

export interface ClipRRectManifest {
    borderRadius?: BorderRadius;
    clipBehavior: Clip;
    child?: Widget;
}

/**
 * [Flutter#ClipRRect](https://api.flutter.dev/flutter/widgets/ClipRRect/ClipRRect.html)
 */
export class ClipRRect extends Widget implements ClipRRectManifest {
    readonly _type = "ClipRRect";
    borderRadius?: BorderRadius;
    clipBehavior: Clip;
    child?: Widget;

    constructor({
        key,
        borderRadius = BorderRadius.zero,
        clipBehavior = Clip.antiAlias,
        ...manifest
    }: { key: WidgetKey } & Omit<ClipRRectManifest, "clipBehavior"> & {
            clipBehavior?: Clip;
        }) {
        super({ key });

        this.borderRadius = borderRadius;
        this.clipBehavior = clipBehavior;
        this.child = manifest.child;
    }
}
