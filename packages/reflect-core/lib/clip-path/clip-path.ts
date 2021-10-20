import { Clip } from "../clip";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

type PathClipper = {
    type: "path";
    /**
     * svg data
     */
    data: string;
};
type Clipper = PathClipper;

export interface ClipPathManifest {
    clipBehavior: Clip;
    clipper: Clipper;
    child?: Widget;
}

/**
 * [Flutter#ClipPath](https://api.flutter.dev/flutter/widgets/ClipPath-class.html)
 */
export class ClipPath
    extends SingleChildRenderObjectWidget
    implements ClipPathManifest {
    readonly _type = "ClipPath";
    clipBehavior: Clip;
    clipper: Clipper;

    constructor({
        key,
        clipBehavior = Clip.antiAlias,
        child,
        ...manifest
    }: { key: WidgetKey } & Omit<ClipPathManifest, "clipBehavior"> & {
            clipBehavior?: Clip;
        }) {
        super({ key, child: child });

        this.clipBehavior = clipBehavior;
        this.clipper = manifest.clipper;
    }
}
