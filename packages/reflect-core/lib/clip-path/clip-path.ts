import { Clip } from "../clip";
import { Widget, WidgetKey } from "../widget";

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
export class ClipPath extends Widget implements ClipPathManifest {
    readonly _type = "ClipPath";
    clipBehavior: Clip;
    child?: Widget;
    clipper: Clipper;

    constructor({
        key,
        clipBehavior = Clip.antiAlias,
        ...manifest
    }: { key: WidgetKey } & Omit<ClipPathManifest, "clipBehavior"> & {
            clipBehavior?: Clip;
        }) {
        super({ key });

        this.clipBehavior = clipBehavior;
        this.clipper = manifest.clipper;
        this.child = manifest.child;
    }
}
