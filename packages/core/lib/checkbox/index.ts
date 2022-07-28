import type { BorderSide } from "../border-side";
import type { Color } from "../color";
import type { MouseCursor } from "../mouse-cursor";
import type { OutlinedBorder } from "../outline-border";
import type { ReflectStateProperty } from "../reflect-state";
import type { WidgetKey } from "../widget";
import { Widget } from "../widget";

export interface ICheckboxManifest {
    value?: boolean;
    tristate?: boolean;
    mouseCursor?: MouseCursor;
    activeColor?: Color;
    fillColor?: ReflectStateProperty<Color>;
    checkColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    overlayColor?: ReflectStateProperty<Color>;
    splashRadius?: number;
    //  visualDensity?: VisualDensity,
    autofocus?: boolean;
    shape?: OutlinedBorder;
    side?: BorderSide;
}

/**
 * Checkbox
 *
 * - [flutter#Checkbox](https://api.flutter.dev/flutter/material/Checkbox-class.html)
 */
export class Checkbox extends Widget implements ICheckboxManifest {
    value?: boolean;
    tristate?: boolean;
    mouseCursor?: MouseCursor;
    activeColor?: Color;
    fillColor?: ReflectStateProperty<Color>;
    checkColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    overlayColor?: ReflectStateProperty<Color>;
    splashRadius?: number;
    //  visualDensity?: VisualDensity,
    autofocus?: boolean;
    shape?: OutlinedBorder;
    side?: BorderSide;

    constructor({
        key,
        value,
        tristate = false,
        mouseCursor,
        activeColor,
        fillColor,
        checkColor,
        focusColor,
        hoverColor,
        overlayColor,
        splashRadius,
        autofocus = false,
        shape,
        side,
    }: { key: WidgetKey } & ICheckboxManifest) {
        super({ key });

        this.value = value;
        this.tristate = tristate;
        this.mouseCursor = mouseCursor;
        this.activeColor = activeColor;
        this.fillColor = fillColor;
        this.checkColor = checkColor;
        this.focusColor = focusColor;
        this.hoverColor = hoverColor;
        this.overlayColor = overlayColor;
        this.splashRadius = splashRadius;
        this.autofocus = autofocus;
        this.shape = shape;
        this.side = side;
    }
}
