import { Color, Colors } from "../color";
import { Widget, WidgetKey } from "../widget";

export interface DividerManifest {
    /**
     * The divider's height extent.
     */
    height: number;
    /**
     * The thickness of the line drawn within the divider.
     */
    thickness: number;
    /**
     * The amount of empty space to the leading edge of the divider.
     */
    indent: number;
    /**
     * The amount of empty space to the trailing edge of the divider.
     */
    endIndent: number;
    /**
     * The color to use when painting the line.
     */
    color: Color;
}

/**
 *
 * references
 * - [Flutter#Divider](https://api.flutter.dev/flutter/material/Divider-class.html)
 * - [mui](https://mui.com/components/dividers/)
 * - [vuetifyjs](https://vuetifyjs.com/en/components/dividers/)
 * - [material.io](https://material.io/components/dividers)
 * - [semantic-ui](https://react.semantic-ui.com/elements/divider/)
 */
export class DividerWidget extends Widget implements DividerManifest {
    height: number;
    thickness: number;
    indent: number;
    endIndent: number;
    color: Color;

    constructor({
        key,
        height = 1,
        thickness = 1,
        indent = 0,
        endIndent = 0,
        color = Colors.grey,
    }: Partial<DividerManifest> & {
        key: WidgetKey;
    }) {
        super({ key: key });
        this.height = height;
        this.thickness = thickness;
        this.indent = indent;
        this.endIndent = endIndent;
        this.color = color;
    }
}
