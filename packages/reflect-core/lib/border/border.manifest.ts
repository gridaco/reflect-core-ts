import { Color } from "../color";
import { BorderSide } from "../border-side";

/**
 * Border interface
 */
export interface Border {
    top: BorderSide;
    left: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
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

    static all({ color, width }: { color: Color; width: number }) {
        return new Border({
            top: { color, width },
            left: { color, width },
            right: { color, width },
            bottom: { color, width },
        });
    }
}
