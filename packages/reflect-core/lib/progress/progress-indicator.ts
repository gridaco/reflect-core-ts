import { Color } from "../color";
import { Widget, WidgetKey } from "../widget";

export interface IProgressIndicatorProps {
    value?: number;
    backgroundColor?: Color;
    color?: Color;
    minHeight?: number;
    semanticsLabel?: string;
}

/**
 * Abstract base progress indicator (Linear progress bar)
 *
 * @see
 * - [flutter#ProgressIndicator](https://api.flutter.dev/flutter/material/ProgressIndicator-class.html)
 */
export abstract class ProgressIndicator
    extends Widget
    implements IProgressIndicatorProps
{
    value?: number;
    backgroundColor?: Color;
    color?: Color;
    minHeight?: number;
    semanticsLabel?: string;

    //
    constructor({
        key,

        value,
        backgroundColor,
        color,
        minHeight,
        semanticsLabel,
    }: { key: WidgetKey } & IProgressIndicatorProps) {
        super({ key });

        this.value = value;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.minHeight = minHeight;
        this.semanticsLabel = semanticsLabel;
    }
}
