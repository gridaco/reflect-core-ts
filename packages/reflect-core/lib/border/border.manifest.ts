import { BorderSide } from "../border-side";

// TODO
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
    constructor(
        top: BorderSide,
        left: BorderSide,
        right: BorderSide,
        bottom: BorderSide
    ) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
    }
}
