import { Color } from "../color";
import { BorderStyle } from "../border-style";
export interface BorderSide {
    /**
     * The color of the border.
     */
    color: Color;
    /**
     * The style of the border.
     */
    style?: BorderStyle;
    /**
     * The width of the border.
     */
    width: number;
}

/**
 * [flutter#BorderSide](https://api.flutter.dev/flutter/painting/BorderSide-class.html)
 */
export class BorderSide {
    constructor(p: BorderSide) {
        //
    }
}
