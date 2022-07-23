import { BorderRadius } from "../border-radius";
import { BorderSide } from "../border-side";
import { Radius } from "../radius";
import { InputBorder } from "./input-border";

/**
 * - [flutter#OutlineInputBorder](https://api.flutter.dev/flutter/material/OutlineInputBorder/OutlineInputBorder.html)
 */
export class OutlineInputBorder extends InputBorder {
    borderRadius: BorderRadius;

    constructor({
        borderSide = BorderSide.none,
        borderRadius = BorderRadius.all(Radius.circular(4.0)),
    }: {
        borderSide?: BorderSide;
        borderRadius?: BorderRadius;
    }) {
        super({ borderSide });

        this.borderRadius = borderRadius;
    }
}
