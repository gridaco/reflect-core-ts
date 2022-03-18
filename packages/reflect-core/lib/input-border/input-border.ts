import { BorderSide } from "../border-side";

/**
 * - [flutter#InputBorder](https://api.flutter.dev/flutter/material/InputBorder-class.html)
 */
export class InputBorder {
    readonly borderSide: BorderSide;
    constructor({ borderSide = BorderSide.none }: { borderSide?: BorderSide }) {
        this.borderSide = borderSide;
    }

    public static none = new InputBorder({ borderSide: BorderSide.none });
}
