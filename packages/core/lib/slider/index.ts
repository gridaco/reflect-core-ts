import type { Color } from "../color";
import { MouseCursor, SystemMouseCursors } from "../mouse-cursor";
import { Widget, WidgetKey } from "../widget";
import assert from "assert";
import { RoundSliderThumbShape } from "../slider.thumb";

export interface ISliderManifest {
    activeColor?: Color;
    autoFocus: boolean;
    divisions: number;
    inactiveColor?: Color;
    max: number;
    min: number;
    mouseCursor?: MouseCursor;
    thumbColor?: Color;
    thumbShape?: RoundSliderThumbShape;
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
    thumbShape?: RoundSliderThumbShape;
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
    thumbShape?: RoundSliderThumbShape;
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
        thumbShape,
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
        this.thumbShape = thumbShape;
        this.initialValue = initialValue;
    }
}

// slider.thumb
export { RoundSliderThumbShape };
