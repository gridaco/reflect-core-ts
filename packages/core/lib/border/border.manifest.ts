import type { Color } from "../color";
import type { BorderSide } from "../border-side";
import type { BorderStyle } from "../border-style";

/**
 * Border interface
 */
export interface Border {
    top?: BorderSide;
    left?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
}

/**
 * [flutter](https://api.flutter.dev/flutter/painting/Border-class.html)
 */
export class Border {
    constructor({ top, left, right, bottom }: Border) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }

    static all({
        color,
        width,
        style,
    }: { color: Color; width: number } & { style?: BorderStyle }) {
        return new Border({
            top: { color, width, style },
            left: { color, width, style },
            right: { color, width, style },
            bottom: { color, width, style },
        });
    }
}
