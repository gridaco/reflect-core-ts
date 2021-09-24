import { DimensionLength } from "..";
import { Widget, WidgetKey } from "../widget";

interface PositionedManifest {
    readonly left?: DimensionLength;
    readonly top?: DimensionLength;
    readonly right?: DimensionLength;
    readonly bottom?: DimensionLength;
    readonly width?: number;
    readonly height?: number;
    readonly child: Widget;
}

export class Positioned extends Widget implements PositionedManifest {
    readonly left?: DimensionLength;
    readonly top?: DimensionLength;
    readonly right?: DimensionLength;
    readonly bottom?: DimensionLength;
    readonly width?: number;
    readonly height?: number;
    readonly child: Widget;

    constructor({ key, ...manifest }: { key: WidgetKey } & PositionedManifest) {
        super({ key });

        this.left = manifest.left;
        this.top = manifest.top;
        this.right = manifest.right;
        this.bottom = manifest.bottom;
        this.width = manifest.width;
        this.height = manifest.height;
        this.child = manifest.child;
    }
}
