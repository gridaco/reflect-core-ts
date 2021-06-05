import { EdgeInsetsManifest } from "./edge-insets.manifest";
import { Offset } from "../offset";
import { EdgeInsetsGeometry } from "../edge-insets-geomatry";

/**
 * [flutter#EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html)
 */
export class EdgeInsets extends EdgeInsetsGeometry {
    bottom: number;
    top: number;
    left: number;
    right: number;

    constructor({
        bottom = 0,
        top = 0,
        left = 0,
        right = 0,
    }: EdgeInsetsManifest) {
        super();
        this.bottom = bottom;
        this.top = top;
        this.left = left;
        this.right = right;
    }

    static all(value: number): EdgeInsets {
        return new EdgeInsets({
            bottom: value,
            top: value,
            left: value,
            right: value,
        });
    }

    static fromLTRB(
        left: number,
        top: number,
        right: number,
        bottom: number
    ): EdgeInsets {
        return new EdgeInsets({
            bottom: bottom,
            top: top,
            left: left,
            right: right,
        });
    }

    static symmetric({
        vertical = 0,
        horizontal = 0,
    }: {
        vertical: number;
        horizontal: number;
    }): EdgeInsets {
        return new EdgeInsets({
            top: vertical,
            bottom: vertical,
            left: horizontal,
            right: horizontal,
        });
    }

    public get bottomLeft(): Offset {
        return new Offset(this.left, -this.bottom);
    }

    public get bottomRight(): Offset {
        return new Offset(-this.right, -this.bottom);
    }

    public get topLeft(): Offset {
        return new Offset(this.left, this.top);
    }

    public get topRight(): Offset {
        return new Offset(-this.right, this.top);
    }
}
