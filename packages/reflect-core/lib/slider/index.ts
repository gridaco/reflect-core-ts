import type { Color } from "../color";
import { MouseCursor, SystemMouseCursors } from "../mouse-cursor";
import { Widget, WidgetKey } from "../widget";
import assert from "assert";

export interface ISliderManifest {
    activeColor?: Color;
    autoFocus: boolean;
    divisions: number;
    inactiveColor?: Color;
    max: number;
    min: number;
    mouseCursor?: MouseCursor;
    thumbColor?: Color;
    initialValue: number;
}

interface ISliderProps {
    activeColor?: Color;
    autoFocus?: boolean;
    divisions?: number;
    inactiveColor?: Color;
    max?: number;
    min?: number;
    mouseCursor?: MouseCursor;
    thumbColor?: Color;
    initialValue?: number;
}

export class Slider extends Widget implements ISliderManifest {
    activeColor?: Color;
    autoFocus: boolean;
    divisions: number;
    inactiveColor?: Color;
    max: number;
    min: number;
    mouseCursor?: SystemMouseCursors;
    thumbColor?: Color;
    initialValue: number;

    constructor({
        key,
        activeColor,
        autoFocus = false,
        divisions,
        inactiveColor,
        max = 1,
        min = 0,
        mouseCursor,
        thumbColor,
        initialValue,
    }: { key?: WidgetKey } & ISliderProps) {
        super({ key });

        assert(initialValue != null);
        assert(min != null);
        assert(max != null);
        assert(min <= max);
        assert(initialValue >= min && initialValue <= max);
        assert(divisions == null || divisions > 0);

        this.activeColor = activeColor;
        this.autoFocus = autoFocus;
        this.divisions = divisions || 0;
        this.inactiveColor = inactiveColor;
        this.max = max;
        this.min = min;
        this.mouseCursor = mouseCursor;
        this.thumbColor = thumbColor;
        this.initialValue = initialValue;
    }
}
